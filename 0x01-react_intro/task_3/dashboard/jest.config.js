"jest": {
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(your-package-name|other-package-name)/)"
  ]
}

