---
title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein `!`-Begrenzer gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag verändert die Regeln, die Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) auswählen. Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Begrenzer und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert der Eigenschaft-Wert-Paar-Deklaration, gefolgt von null oder mehr Leerzeichen. Das important-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Kaskade

Bei wichtigen Deklarationen werden die [Kaskaden-Ursprünge und Schichtenreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction) umgekehrt. Ohne das important-Flag überschreiben Deklarationen in den Stylesheets des Autors die Deklarationen in einem Benutzer-Stylesheet, die wiederum die Deklarationen im Standard-Stylesheet des Benutzer-Agents überschreiben.

Wenn eine Deklaration wichtig ist, wird die Hierarchiereihenfolge umgekehrt. Deklarationen, die im Stylesheet des Benutzer-Agents als wichtig gekennzeichnet sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets alle wichtigen Deklarationen in den Stylesheets des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animation](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Deklarationen nicht gültig.

Die Umkehrung der Vorrangordnung für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie beispielsweise personalisierte Farbschemata oder große Schriftarten, die Stilvorgaben des Autors überschreiben können, wenn nötig, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig markieren. Es gewährleistet auch, dass bösartige Erweiterungen wichtige Benutzer-Agent-Stile nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat etwas Vorrang vor wichtigen Deklarationen? Ja, [Transitions](/de/docs/Web/CSS/Guides/Transitions). CSS-Übergänge sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich die Eigenschaft von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zu einem anderen wird eine Eigenschaft keine spezifische wichtige Deklaration erfüllen.

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

In diesem Beispiel werden die `color`- und `background-color`-Eigenschaften über zwei Sekunden in den Hover-Zustand übergehen. Auch wenn Standardzustände normale Deklarationen und Hover-Zustände `!important`-Deklarationen sind, findet der Übergang statt.

### Kaskadenschichten

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Benutzer und Benutzer-Agent – überschreiben normale Deklarationen in nicht geschichteten Stilen geschichtete Stildeklarationen, wobei die zuletzt deklarierte Vorrang vor den zuvor deklarierten Schichten hat. Wichtige Deklarationen kehren die Vorrangordnung um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Zudem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen außerhalb einer Schicht.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert werden. Sie können auch normal oder wichtig sein. Inline _normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline _wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus Benutzer- oder Benutzer-Agent-Stylesheets und Übergängen überschreiben sie.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung der Spezifität ist, steht es damit in Zusammenhang. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/Guides/Cascade/Introduction).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall der Über-Spezifizierung eines Selektors. Egal wie hoch die Spezifität des Selektors mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus derselben Quelle und Kaskadenschicht wird stets Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektorenspezifität von Bedeutung. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzschreibweise-Eigenschaften

Die Deklaration einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die folgenden zwei Selektor-Stilblöcke sind äquivalent:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

Dieses Beispiel zeigt einen der mehreren Gründe, warum die Vermeidung des important-Flags im Allgemeinen empfohlen wird.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Wertdeklaration einer benutzerdefinierten Eigenschaft hinzugefügt wird, wird die Wertzuweisung wichtig gemacht. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion übergeben.

```css
:root {
  --my-color: red !important;
  --my-color: blue;
}
p {
  color: var(--my-color);
}
blockquote {
  color: var(--my-color);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot und nicht blau sein, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, weil die lila normale Deklaration nach der roten normalen Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um die Spezifität zu überschreiben. Wenn Sie bewusst wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Wartenden zu erklären, warum sie diese Funktion nicht überschreiben sollten.

Selbst wenn Sie daran arbeiten, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem Drittanbieter-Plugin, die mit einem [id-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert sind, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das Stylesheetscript des Drittanbieters als Ihre erste Kaskadenschicht in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet, das wichtige Deklarationen enthält, überschreiben müssen, erstellen Sie eine Kaskadenschicht, die die erforderlichen Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindert, dass einzelne Benutzer mit speziellen Anforderungen, wie z.B. großen Schriftarten, Ihre Stile überschreiben können, indem sie wichtige Stile in ihrem eigenen Benutzer-Stylesheet hinzufügen.

## Browser-Kompatibilität

Diese Funktion wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
