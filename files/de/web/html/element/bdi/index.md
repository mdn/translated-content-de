---
title: "<bdi>: Das Bidirectional Isolate-Element"
slug: Web/HTML/Element/bdi
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Das **`<bdi>`** [HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Es ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes nicht bekannt ist.

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die von links nach rechts (LTR) als auch von rechts nach links (RTL) angeordnet sind, wie z.B. ein arabisches Zitat in einer englischen Zeichenfolge. Browser implementieren den [Unicode Bidirectional Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um dies zu handhaben. In diesem Algorithmus erhalten Zeichen eine implizite Richtung: Zum Beispiel werden lateinische Zeichen als LTR behandelt, während arabische Zeichen als RTL betrachtet werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral betrachtet und erhalten ihre Richtung basierend auf den umgebenden Zeichen.

Normalerweise macht der bidirektionale Algorithmus das Richtige, ohne dass der Autor spezielles Markup bereitstellen muss, aber gelegentlich benötigt der Algorithmus Hilfe. Hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umschließen und den bidirektionalen Algorithmus anzuweisen, diesen Text isoliert von seiner Umgebung zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung des in `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des in `<bdi>` eingebetteten Textes _wird nicht von_ der Richtung des umgebenden Textes beeinflusst.

Zum Beispiel betrachten Sie einen Text wie:

```plain
EMBEDDED-TEXT - 1st place
```

Falls `EMBEDDED-TEXT` LTR ist, funktioniert dies gut. Aber wenn `EMBEDDED-TEXT` RTL ist, wird `- 1` als RTL-Text behandelt (da es aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird durcheinander sein:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem lösen, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Global_attributes#dir)-Attribut, das auf die bekannte Richtung gesetzt ist, einfügen. Aber wenn Sie die Richtung nicht kennen - zum Beispiel, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt mit der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf einem {{HTMLElement("span")}} oder einem anderen Textformatierungselement erzielt werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser CSS-Stil ignorieren dürfen.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger klar.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), mit der Ausnahme, dass das [`dir`](/de/docs/Web/HTML/Global_attributes#dir)-Attribut anders als normal verhält: Es standardmäßig auf `auto` gesetzt ist, was bedeutet, dass sein Wert nie vom übergeordneten Element geerbt wird. Das bedeutet, dass Sie, sofern Sie keinen Wert von entweder `rtl` oder `ltr` für `dir` angeben, der [User-Agent](/de/docs/Glossary/user_agent) basierend auf dem Inhalt des `<bdi>` die richtige Richtung bestimmt.

## Beispiele

### Kein bdi mit nur LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse gut aus:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_only_LTR','','120') }}

### Kein bdi mit RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf, wobei einer der Gewinner einen Namen mit RTL-Text hat. In diesem Fall wird das `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen, und das Ergebnis wird durcheinander:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_RTL_text','','120') }}

### Verwenden von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von `<bdi>`-Elementen auf. Diese Elemente weisen den Browser an, den Namen isoliert von seinem Einbettungskontext zu behandeln, so dass die Beispielausgabe korrekt geordnet ist:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120') }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Zeichensatz-Inhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Zeichensatz-Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Zeichensatz-Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inline-Markup und bidirektionaler Text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Grundlagen des Unicode Bidirectional Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- [Lokalisierung](/de/docs/Glossary/Localization)
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
