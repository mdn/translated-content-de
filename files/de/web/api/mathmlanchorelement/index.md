---
title: MathMLAnchorElement
slug: Web/API/MathMLAnchorElement
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die Schnittstelle **`MathMLAnchorElement`** repräsentiert MathML-[`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elemente (Hyperlinks) und stellt Eigenschaften bereit, mit denen sich verschiedene Merkmale dieser Elemente abrufen und festlegen lassen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement)._

- [`MathMLAnchorElement.download`](/de/docs/Web/API/MathMLAnchorElement/download) {{experimental_inline}}
  - : Ein String, der angibt, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll.
- [`MathMLAnchorElement.hash`](/de/docs/Web/API/MathMLAnchorElement/hash) {{experimental_inline}}
  - : Ein String, der den Fragmentbezeichner der referenzierten URL einschließlich des vorangestellten Hash-Zeichens (`#`) darstellt, sofern vorhanden.
- [`MathMLAnchorElement.host`](/de/docs/Web/API/MathMLAnchorElement/host) {{experimental_inline}}
  - : Ein String, der den Hostnamen und den Port der referenzierten URL darstellt, sofern es sich nicht um den Standardport handelt.
- [`MathMLAnchorElement.hostname`](/de/docs/Web/API/MathMLAnchorElement/hostname) {{experimental_inline}}
  - : Ein String, der den Hostnamen der referenzierten URL darstellt.
- [`MathMLAnchorElement.href`](/de/docs/Web/API/MathMLAnchorElement/href) {{experimental_inline}}
  - : Ein String, der sich aus der Auswertung des [`href`](/de/docs/Web/MathML/Reference/Element/a#href)-Attributs des Elements relativ zum Dokument ergibt und eine gültige URL einer verlinkten Ressource enthält.
- [`MathMLAnchorElement.hreflang`](/de/docs/Web/API/MathMLAnchorElement/hreflang) {{experimental_inline}}
  - : Ein String, der das [`hreflang`](/de/docs/Web/MathML/Reference/Element/a#hreflang)-Attribut des Elements widerspiegelt und die Sprache der verlinkten Ressource angibt.
- [`MathMLAnchorElement.origin`](/de/docs/Web/API/MathMLAnchorElement/origin) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Ursprung der URL enthält, also ihr Schema, ihre Domain und ihren Port.
- [`MathMLAnchorElement.password`](/de/docs/Web/API/MathMLAnchorElement/password) {{experimental_inline}}
  - : Ein String, der das vor dem Domainnamen angegebene Passwort enthält.
- [`MathMLAnchorElement.pathname`](/de/docs/Web/API/MathMLAnchorElement/pathname) {{experimental_inline}}
  - : Ein String, der mit `/` beginnt und darauf folgend den Pfad der URL enthält, jedoch weder die Abfragezeichenfolge noch das Fragment.
- [`MathMLAnchorElement.ping`](/de/docs/Web/API/MathMLAnchorElement/ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` an diese URLs.
- [`MathMLAnchorElement.port`](/de/docs/Web/API/MathMLAnchorElement/port) {{experimental_inline}}
  - : Ein String, der die Portkomponente der referenzierten URL darstellt, sofern vorhanden.
- [`MathMLAnchorElement.protocol`](/de/docs/Web/API/MathMLAnchorElement/protocol) {{experimental_inline}}
  - : Ein String, der die Protokollkomponente der referenzierten URL einschließlich des abschließenden Doppelpunkts (`:`) darstellt.
- [`MathMLAnchorElement.referrerPolicy`](/de/docs/Web/API/MathMLAnchorElement/referrerPolicy) {{experimental_inline}}
  - : Ein String, der festlegt, wie viele Informationen über den [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links unter welchen Umständen gesendet werden.
- [`MathMLAnchorElement.rel`](/de/docs/Web/API/MathMLAnchorElement/rel) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von Linktypen, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.
- [`MathMLAnchorElement.relList`](/de/docs/Web/API/MathMLAnchorElement/relList) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein dynamisch aktualisiertes [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Objekt, das die Linktypen enthält, die die Beziehung zwischen der durch den Link repräsentierten Ressource und dem aktuellen Dokument angeben.
- [`MathMLAnchorElement.search`](/de/docs/Web/API/MathMLAnchorElement/search) {{experimental_inline}}
  - : Ein String, der die Abfragekomponente der referenzierten URL einschließlich des vorangestellten Fragezeichens (`?`) darstellt, sofern vorhanden.
- [`MathMLAnchorElement.target`](/de/docs/Web/API/MathMLAnchorElement/target) {{experimental_inline}}
  - : Ein String, der das [`target`](/de/docs/Web/MathML/Reference/Element/a#target)-Attribut des Elements widerspiegelt und angibt, wo die verlinkte Ressource angezeigt werden soll.
- [`MathMLAnchorElement.type`](/de/docs/Web/API/MathMLAnchorElement/type) {{experimental_inline}}
  - : Ein String, der das [`type`](/de/docs/Web/MathML/Reference/Element/a#type)-Attribut des Elements widerspiegelt und den MIME-Typ der verlinkten Ressource angibt.
- [`MathMLAnchorElement.username`](/de/docs/Web/API/MathMLAnchorElement/username) {{experimental_inline}}
  - : Ein String, der den vor dem Domainnamen angegebenen Benutzernamen enthält.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeichnet die [Gammafunktion](https://en.wikipedia.org/wiki/Gamma_function) in MathML aus. Es zeigt, wie Sie in JavaScript über die Schnittstelle `MathMLAnchorElement` auf Eigenschaften von MathML-`<a>`-Elementen zugreifen können.

#### MathML

Das Beispiel enthält mehrere `<a>`-Elemente. Das erste ist ein Link zu `example.com`, der mehrere Link- und URL-Merkmale enthält, auf die wir mit JavaScript zugreifen können. Außerdem fügen wir ein {{htmlelement("ul")}}-Element hinzu, in dem die Eigenschaftswerte ausgegeben werden.

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

Wir holen Referenzen auf das erste MathML-`<a>`-Element im Dokument und auf das `<ul>`-Element.

```js live-sample___mathmlanchorelement
const mathAnchor = document.querySelector("math a");
const list = document.querySelector("ul");
```

Als Nächstes definieren wir eine Funktion, die einen String als Bezeichnung einer Eigenschaft des `MathMLAnchorElement`-Objekts entgegennimmt und der `list` ein {{htmlelement("li")}} mit dem Eigenschaftsnamen und dem Eigenschaftswert hinzufügt:

```js live-sample___mathmlanchorelement
function outputValue(value) {
  const listItem = document.createElement("li");
  listItem.textContent = `${value}: ${mathAnchor[value]}`;
  list.appendChild(listItem);
}
```

Schließlich rufen wir die Funktion mehrmals auf, um die Namen und Werte der direkt in der Schnittstelle definierten Eigenschaften in der Liste auszugeben:

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
