---
title: <a>
slug: Web/MathML/Reference/Element/a
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

Das [MathML](/de/docs/Web/MathML)-Element **`<a>`** ermöglicht das Erstellen von Hyperlinks innerhalb von MathML-Formeln, die verschiedene Teile mit unterschiedlichen Orten verknüpfen.

Das MathML-Element `<a>` ist ein Container. Das bedeutet, dass Sie einen Link um beliebige MathML-Inhalte erstellen können. Für Layout-Zwecke verhält es sich wie ein {{MathMLElement("mrow")}}-Element.

Wenn das Attribut `href` vorhanden ist, wird das `<a>`-Element durch Drücken der Eingabetaste aktiviert, während es fokussiert ist.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden Attribute:

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Textnachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise keine anderen URL-Schemata unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Funktionen bestimmte Teile der Ressource lokalisieren, darunter:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textstellen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine integrierte Funktionalität. Zulässige Werte entsprechen denen des [globalen Attributs `lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang).

- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als Name eines _Browsing-Kontexts_ (eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen wird:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: In der Regel ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen Kontexts. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Genauer gesagt ist dies der „höchste“ Kontext, der ein Vorgänger des aktuellen Kontexts ist. Wenn keine Vorgänger vorhanden sind, verhält sich dies wie `_self`.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mittels eines {{Glossary("MIME_type", "MIME-Typs")}}. Keine integrierte Funktionalität.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeichnet die [Gammafunktion](https://en.wikipedia.org/wiki/Gamma_function) in MathML aus. Es enthält mehrere MathML-Elemente `<a>`, um einzelne Teile der Formel mit ihren jeweiligen Abschnitten auf der Wiki-Seite zu verknüpfen.

#### MathML

```html live-sample___mathml-a
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a href="https://en.wikipedia.org/wiki/Gamma_function"
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
```

```css hidden live-sample___mathml-a
math {
  font-size: 4vw;
}
```

#### Ergebnis

{{EmbedLiveSample("mathml-a", "100%", "200")}}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">
        <code>generic</code>
      </a>
    </td>
  </tr>
  <tr>
    <th scope="row">DOM-Schnittstelle</th>
    <td>[`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)</td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)
