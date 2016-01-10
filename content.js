var elements = document.getElementsByTagName('*');

for ( var i = 0; i < elements.length; i++ ) {
	var element = elements[i];

	for ( var j = 0; j < element.childNodes.length; j++ ) {
		var node = element.childNodes[j];

		if ( node.nodeType === 3 ) {

			var text = node.nodeValue;
			var replacedText = [ 
						text.replace( 'Donald Trump', 'Paris Twat-German' ),
						text.replace( '/Donald J[a-z.]* Trump/g', 'Paris Twat-German' ) 
				];

			for ( var k = 0; k < replacedText.length; k++ ) {

				console.log( replacedText[k] );

				if ( replacedText[k] !== text ) {
					element.replaceChild(document.createTextNode(replacedText[k]), node)
				}
			}
		}
	}
}