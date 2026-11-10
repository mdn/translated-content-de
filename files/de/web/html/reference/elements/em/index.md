---
title: HTML-Element `<em>` zur Betonung
short-title: <em>
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<em>`**-Element von [HTML](/de/docs/Web/HTML) kennzeichnet Text, der betont werden soll. Das `<em>`-Element kann verschachtelt werden, wobei jede Verschachtelungsebene eine stärkere Betonung anzeigt.

{{InteractiveExample("HTML Demo: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
em {
  /* Add your styles here */
}
```

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

Das `<em>`-Element dient dazu, Wörter gegenüber dem umgebenden Text hervorzuheben. Die Betonung beschränkt sich häufig auf ein oder mehrere Wörter eines Satzes und beeinflusst die Bedeutung des Satzes selbst.

Dieses Element wird üblicherweise kursiv dargestellt. Es sollte jedoch nicht verwendet werden, um Text lediglich kursiv zu formatieren; verwenden Sie dafür die CSS-Eigenschaft {{cssxref("font-style")}}. Verwenden Sie das Element {{HTMLElement("cite")}}, um den Titel eines Werks (Buch, Theaterstück, Lied usw.) zu kennzeichnen. Verwenden Sie das Element {{HTMLElement("i")}}, um Text in einem anderen Tonfall oder einer anderen Stimmung zu kennzeichnen. Dazu gehören viele typische Anwendungsfälle für Kursivschrift, etwa wissenschaftliche Namen oder Wörter in anderen Sprachen. Verwenden Sie das Element {{HTMLElement("strong")}}, um Text zu kennzeichnen, der wichtiger ist als der umgebende Text.

### \<i> gegenüber \<em>

Für manche Entwickler ist möglicherweise unklar, warum mehrere Elemente scheinbar ähnliche visuelle Ergebnisse erzeugen. `<em>` und `<i>` sind ein häufiges Beispiel, da beide Text kursiv darstellen. Was ist der Unterschied? Welches sollten Sie verwenden?

Standardmäßig ist das visuelle Ergebnis gleich. Die semantische Bedeutung ist jedoch unterschiedlich. Das Element `<em>` steht für eine Betonung seines Inhalts, während das Element `<i>` Text kennzeichnet, der sich vom normalen Fließtext abhebt, etwa ein fremdsprachiges Wort, Gedanken einer fiktiven Figur oder einen Fall, in dem sich der Text auf die Definition eines Wortes statt auf dessen Bedeutung bezieht. (Für den Titel eines Werks, etwa den Namen eines Buchs oder Films, sollte `<cite>` verwendet werden.)

Welches Element das richtige ist, hängt also vom jeweiligen Fall ab. Keines der beiden dient rein dekorativen Zwecken; dafür ist die Formatierung mit CSS vorgesehen.

Beispiele für `<em>` könnten sein:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

Eine Person oder Software, die den Text vorliest, würde die kursiv dargestellten Wörter durch stärkere Betonung hervorheben.

Beispiele für `<i>` könnten sein:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Hier erhält „Queen Mary“ keine zusätzliche Betonung oder Bedeutung. Es wird lediglich angezeigt, dass es sich bei dem betreffenden Objekt nicht um eine Königin namens Mary, sondern um ein Schiff namens „Queen Mary“ handelt.

## Beispiele

In diesem Beispiel wird das Element `<em>` verwendet, um einen impliziten oder expliziten Gegensatz zwischen zwei Zutatenlisten hervorzuheben:

```html
<p>
  Ice cream is made with milk, sweetener, and cream. Frozen custard, on the
  other hand, is made of milk, cream, sweetener, and <em>egg yolks</em>.
</p>
```

### Ergebnis

{{EmbedLiveSample("examples")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        > zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement). Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox für dieses Element die Schnittstelle
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement).
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("i")}}
