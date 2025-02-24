---
title: "<bdi>: Das Bidirektionale Isolierungselement"
slug: Web/HTML/Element/bdi
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<bdi>`**-Element von [HTML](/de/docs/Web/HTML) weist den bidirektionalen Algorithmus des Browsers an, den enthaltenen Text in Isolation von seinem umgebenden Text zu behandeln. Es ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes nicht bekannt ist.

{{InteractiveExample("HTML Demo: &lt;bdi&gt;", "tabbed-standard")}}

```html interactive-example
<h1>World wrestling championships</h1>

<ul>
  <li><bdi class="name">Evil Steven</bdi>: 1st place</li>
  <li><bdi class="name">François fatale</bdi>: 2nd place</li>
  <li><span class="name">سما</span>: 3rd place</li>
  <li><bdi class="name">الرجل القوي إيان</bdi>: 4th place</li>
  <li><span class="name" dir="auto">سما</span>: 5th place</li>
</ul>
```

```css interactive-example
html {
  font-family: sans-serif;
}

/* stylelint-disable-next-line block-no-empty */
bdi {
}

.name {
  color: red;
}
```

Bidirektionaler Text kann sowohl Zeichenfolgen enthalten, die von links nach rechts (LTR) als auch von rechts nach links (RTL) angeordnet sind, wie beispielsweise ein arabisches Zitat in einem englischen Satz. Browser implementieren den [Unicode Bidirektionalen Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um dies zu handhaben. In diesem Algorithmus erhalten Zeichen eine implizite Richtung: Zum Beispiel werden lateinische Zeichen als LTR behandelt, während arabische Zeichen als RTL betrachtet werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und erhalten ihre Richtung basierend auf den sie umgebenden Zeichen.

Normalerweise erledigt der bidirektionale Algorithmus das Richtige, ohne dass der Autor spezielles Markup bereitstellen muss, aber gelegentlich benötigt der Algorithmus Hilfe. Hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umschließen und den bidirektionalen Algorithmus anzuweisen, diesen Text in Isolation von seiner Umgebung zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung des in `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des in `<bdi>` eingebetteten Textes _wird nicht von_ der Richtung des umgebenden Textes beeinflusst.

Beispielsweise betrachten Sie den folgenden Text:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert dies gut. Aber wenn `EMBEDDED-TEXT` RTL ist, wird `- 1` als RTL-Text behandelt (weil er aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird unverständlich sein:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem beheben, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut setzen, das auf die bekannte Richtung eingestellt ist. Aber wenn Sie die Richtung nicht kennen - zum Beispiel, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt durch die Anwendung der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf ein {{HTMLElement("span")}} oder ein anderes Textformatierungselement erzielt werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser berechtigt sind, CSS-Stile zu ignorieren.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger klar.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), mit der Ausnahme, dass das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut anders als üblich reagiert: Es hat standardmäßig den Wert `auto`, was bedeutet, dass sein Wert niemals vom übergeordneten Element geerbt wird. Das bedeutet, dass, sofern Sie keinen Wert von `rtl` oder `ltr` für `dir` angeben, der {{Glossary("user_agent", "Benutzeragent")}} die richtige Richtung auf Basis des Inhalts des `<bdi>` bestimmt.

## Beispiele

### Kein bdi mit nur LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs mit nur {{HTMLElement("span")}}-Elementen auf. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse gut aus:

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

Dieses Beispiel listet die Gewinner eines Wettbewerbs mit nur {{HTMLElement("span")}}-Elementen auf, und einer der Gewinner hat einen Namen, der aus RTL-Text besteht. In diesem Fall wird `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen, und das Ergebnis wird unverständlich:

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

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von `<bdi>`-Elementen auf. Diese Elemente weisen den Browser an, den Namen in Isolation von seinem Einbettungskontext zu behandeln, sodass die Beispielausgabe korrekt geordnet ist:

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>,
        wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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
- [Grundlagen des Unicode-Bidirektionalen-Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
