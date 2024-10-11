---
title: "<bdi>: Das Bidirektionale Isolierungselement"
slug: Web/HTML/Element/bdi
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<bdi>`**-[HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Es ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes nicht bekannt ist.

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die von links nach rechts (LTR) als auch solche, die von rechts nach links (RTL) angeordnet sind, wie ein arabisches Zitat, das in einen englischen Satz eingebettet ist. Browser implementieren den [Unicode-Bidirektionalen Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um dies zu handhaben. In diesem Algorithmus erhalten Zeichen eine implizite Richtung: Beispielsweise werden lateinische Zeichen als LTR behandelt, während arabische Zeichen als RTL behandelt werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und erhalten eine Richtung basierend auf den sie umgebenden Zeichen.

Normalerweise erledigt der bidirektionale Algorithmus die richtige Arbeit, ohne dass der Autor spezielles Markup bereitstellen muss, aber gelegentlich benötigt der Algorithmus Unterstützung. Hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umgeben und den bidirektionalen Algorithmus anzuweisen, diesen Text isoliert von seiner Umgebung zu behandeln. Dies funktioniert in zwei Richtungen:

- Die Richtung des in `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des in `<bdi>` eingebetteten Textes _wird nicht durch_ die Richtung des umgebenden Textes beeinflusst.

Beispielsweise betrachten Sie einen Text wie:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert dies einwandfrei. Aber wenn `EMBEDDED-TEXT` RTL ist, wird `- 1` als RTL-Text behandelt (da es aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird durcheinandergebracht:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem beheben, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut umschließen, das auf die bekannte Richtung gesetzt ist. Aber wenn Sie die Richtung nicht kennen - beispielsweise, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt durch die Verwendung der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf einem {{HTMLElement("span")}} oder einem anderen textformatierenden Element erreicht werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser das Ignorieren von CSS-Stylings erlaubt ist.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger klar.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), mit der Ausnahme, dass das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut anders als normal funktioniert: Es ist standardmäßig auf `auto` gesetzt, was bedeutet, dass sein Wert niemals vom Elternelement geerbt wird. Dies bedeutet, dass, sofern Sie keinen Wert von entweder `rtl` oder `ltr` für `dir` angeben, der {{Glossary("user_agent", "User-Agent")}} die korrekte Richtung basierend auf dem Inhalt des `<bdi>` bestimmt.

## Beispiele

### Kein bdi mit nur LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse gut aus:

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

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen, wobei einer der Gewinner einen Namen hat, der aus RTL-Text besteht. In diesem Fall wird das `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen, und das Ergebnis wird durcheinandergebracht:

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

### Verwendung von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von `<bdi>`-Elementen. Diese Elemente weisen den Browser an, den Namen isoliert vom Einbettungskontext zu behandeln, sodass die beispielhafte Ausgabe korrekt geordnet ist:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Irgendeine</td>
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
- [Grundlagen des Unicode-Bidirektionalen Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
