---
title: MathMLAnchorElement
slug: Web/API/MathMLAnchorElement
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die Schnittstelle **`MathMLAnchorElement`** repräsentiert MathML-Elemente [`<a>`](/de/docs/Web/MathML/Reference/Element/a) (Hyperlinks) und stellt Eigenschaften zum Abrufen und Festlegen verschiedener Merkmale solcher Elemente bereit.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem übergeordneten Element [`MathMLElement`](/de/docs/Web/API/MathMLElement)._

- [`MathMLAnchorElement.hash`](/de/docs/Web/API/MathMLAnchorElement/hash)
  - : Ein String, der den Fragment-Identifier einschließlich des vorangestellten Hash-Zeichens (`#`) repräsentiert, sofern vorhanden, in der referenzierten URL.
- [`MathMLAnchorElement.host`](/de/docs/Web/API/MathMLAnchorElement/host)
  - : Ein String, der den Hostnamen und den Port (sofern es nicht der Standardport ist) in der referenzierten URL repräsentiert.
- [`MathMLAnchorElement.hostname`](/de/docs/Web/API/MathMLAnchorElement/hostname)
  - : Ein String, der den Hostnamen in der referenzierten URL repräsentiert.
- [`MathMLAnchorElement.href`](/de/docs/Web/API/MathMLAnchorElement/href)
  - : Ein String, der das Ergebnis des Parsens des Attributes [`href`](/de/docs/Web/MathML/Reference/Element/a#href) des Elements relativ zum Dokument ist und eine gültige URL einer verlinkten Ressource enthält.
- [`MathMLAnchorElement.hreflang`](/de/docs/Web/API/MathMLAnchorElement/hreflang)
  - : Ein String, der das Attribut [`hreflang`](/de/docs/Web/MathML/Reference/Element/a#hreflang) des Elements widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`MathMLAnchorElement.origin`](/de/docs/Web/API/MathMLAnchorElement/origin) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`MathMLAnchorElement.password`](/de/docs/Web/API/MathMLAnchorElement/password)
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`MathMLAnchorElement.pathname`](/de/docs/Web/API/MathMLAnchorElement/pathname)
  - : Ein String, der einen anfänglichen `/` gefolgt vom Pfad der URL enthält, ohne Query-String oder Fragment.
- [`MathMLAnchorElement.port`](/de/docs/Web/API/MathMLAnchorElement/port)
  - : Ein String, der die Port-Komponente der referenzierten URL repräsentiert, sofern vorhanden.
- [`MathMLAnchorElement.protocol`](/de/docs/Web/API/MathMLAnchorElement/protocol)
  - : Ein String, der die Protokoll-Komponente einschließlich des nachgestellten Doppelpunkts (`:`) der referenzierten URL repräsentiert.
- [`MathMLAnchorElement.search`](/de/docs/Web/API/MathMLAnchorElement/search)
  - : Ein String, der das Suchelement einschließlich des vorangestellten Fragezeichens (`?`) der referenzierten URL repräsentiert, sofern vorhanden.
- [`MathMLAnchorElement.target`](/de/docs/Web/API/MathMLAnchorElement/target)
  - : Ein String, der das Attribut [`target`](/de/docs/Web/MathML/Reference/Element/a#target) des Elements widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`MathMLAnchorElement.type`](/de/docs/Web/API/MathMLAnchorElement/type)
  - : Ein String, der das Attribut [`type`](/de/docs/Web/MathML/Reference/Element/a#type) des Elements widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`MathMLAnchorElement.username`](/de/docs/Web/API/MathMLAnchorElement/username)
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeichnet die [Gammafunktion](https://en.wikipedia.org/wiki/Gamma_function) in MathML aus. Es zeigt, wie über die Schnittstelle `MathMLAnchorElement` in JavaScript auf MathML-`<a>`-Eigenschaften zugegriffen wird.

#### MathML

Das Beispiel enthält mehrere `<a>`-Elemente. Das erste ist ein `example.com`-Link, der mehrere Link- und URL-Merkmale enthält, die wir mit JavaScript ansprechen können. Außerdem fügen wir ein {{htmlelement("ul")}}-Element hinzu, um Eigenschaftswerte darin auszugeben.

```html live-sample___mathmlanchorelement
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a
        href="https://uname:pwd@example.com:8000/subsection?q=123#fragment"
        target="_blank"
        hreflang="en"
        type="text/html"
        ><mrow
          ><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>t</mi
          ><mo stretchy="false">)</mo></mrow
        ></a
      ><mo>=</mo
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Main_definition"
        ><mrow
          ><msubsup
            ><mo>∫</mo><mn>0</mn><mrow><mo>+</mo><mn>∞</mn></mrow></msubsup
          ><msup
            ><mi>x</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msup
          ><msup
            ><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup
          ><mi>d</mi><mi>x</mi></mrow
        ></a
      ><mo>=</mo
      ><a
        href="https://en.wikipedia.org/wiki/Gamma_function#Euler's_definition_as_an_infinite_product"
        ><mrow
          ><mfrac><mn>1</mn><mi>t</mi></mfrac
          ><munderover
            ><mo>∏</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow
            ><mn>∞</mn></munderover
          ><mfrac
            ><msup
              ><mrow
                ><mo>(</mo
                ><mrow
                  ><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow
                ><mo>)</mo></mrow
              ><mi>t</mi></msup
            ><mrow
              ><mn>1</mn><mo>+</mo><mfrac><mi>t</mi><mi>n</mi></mfrac></mrow
            ></mfrac
          ></mrow
        ></a
      ><a href="https://en.wikipedia.org/wiki/Asymptotic_analysis#Definition"
        ><mo>∼</mo></a
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Stirling's_formula"
        ><mrow
          ><msqrt
            ><mfrac
              ><mrow><mn>2</mn><mi>π</mi></mrow
              ><mi>t</mi></mfrac
            ></msqrt
          ><msup
            ><mrow
              ><mo>(</mo><mfrac><mi>t</mi><mi>e</mi></mfrac
              ><mo>)</mo></mrow
            ><mi>t</mi></msup
          ></mrow
        ></a
      ></mrow
    ></semantics
  ></math
>

<ul></ul>
```

```css hidden live-sample___mathmlanchorelement
math {
  font-size: 4vw;
}
```

#### JavaScript

Wir erhalten Referenzen auf das erste MathML-`<a>`-Element im Dokument und auf das `<ul>`-Element.

```js live-sample___mathmlanchorelement
const mathAnchor = document.querySelector("math a");
const list = document.querySelector("ul");
```

Als Nächstes definieren wir eine Funktion, die einen Stringwert entgegennimmt, der eine Eigenschaft des Objekts `MathMLAnchorElement` repräsentiert, und ein {{htmlelement("li")}} an die `list` anhängt, das den Eigenschaftsnamen und den Eigenschaftswert enthält:

```js live-sample___mathmlanchorelement
function outputValue(value) {
  const listItem = document.createElement("li");
  listItem.textContent = `${value}: ${mathAnchor[value]}`;
  list.appendChild(listItem);
}
```

Abschließend rufen wir die Funktion mehrmals auf, um Namen und Werte von direkt auf der Schnittstelle definierten Eigenschaften in der Liste auszugeben:

```js live-sample___mathmlanchorelement
outputValue("href");
outputValue("target");
outputValue("origin");
outputValue("protocol");
outputValue("username");
outputValue("password");
outputValue("host");
outputValue("hostname");
outputValue("port");
outputValue("pathname");
outputValue("search");
outputValue("hash");
outputValue("hreflang");
outputValue("type");
```

#### Ergebnis

{{EmbedLiveSample("mathmlanchorelement", "100%", "460")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
