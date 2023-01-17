// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract AwesomeGame is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant SWORD = 2;
    uint256 public constant SHIELD = 3;
    uint256 public constant CROWN = 4;

    constructor() ERC1155("https://awesomegame.com/assets/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**18, "");
        _mint(msg.sender, SWORD, 1000, "");
        _mint(msg.sender, SHIELD, 1000, "");
        _mint(msg.sender, CROWN, 1, "");
    }
}




// memo

// 初期設定？
//     uint256 public tokenCount;
//     uint256 public batchSize = 1000;
    // uint256 public _totalSupply = 10000;

//       constructor(address _manager ) ERC721A("sineMC", "sineMC") {
//       manager = _manager;
//       tokenCount = 0;
//   }

// uint256 public ownerLimit = 1000; // 1000
//   // owner mint
//   function ownerMint(uint256 quantity, address to) external onlyOwnerOrManager {
//     require((quantity + tokenCount) <= (_totalSupply), "too many already minted before patner mint");
//     require((quantity + tokenCount) <= (ownerLimit), "too many already minted before patner mint");
//     _safeMint(to, quantity);
//     tokenCount += quantity;
//   }


//   string public baseURI;
// string public unrevealedTokenUri;


// ==================tokenURI,BaseURI====================
//   //retuen BaseURI.internal.
//   function _baseURI() internal view override returns (string memory){
//     return baseURI;
//   }

// function tokenURI(uint256 _tokenId) public view virtual override(ERC721A, IERC721A) returns (string memory) {
//     require(_exists(_tokenId), "URI query for nonexistent token");
//     if(revealed == false) {
//       return unrevealedTokenUri;
//     }
//     return string(abi.encodePacked(_baseURI(), Strings.toString(_tokenId), ext));
//   }
// ==================

//  //set URI
//   function setBaseURI(string calldata _baseURI_) external onlyOwnerOrManager {
//     baseURI = _baseURI_;
//   }
//   function setUnrevealedURI(string calldata uri_) public onlyOwnerOrManager {
//     unrevealedTokenUri = uri_;
//   }
//   function setReveal(bool bool_) external onlyOwnerOrManager {
//     revealed = bool_;
//   }
