---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln zur Auswahl von Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Obwohl Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert der Eigenschaft-Wert-Paar-Deklaration, gefolgt von null oder mehreren Leerzeichen. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Einfluss auf die Kaskade

Bei wichtigen Deklarationen werden die [Kaskade-Ursprünge und Schichtebenen](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Autor-Stylesheets Deklarationen im Nutzer-Stylesheet, die wiederum Deklarationen im Standard-Stylesheet des User-Agents überschreiben.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die im User-Agent-Stylesheet als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Nutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Nutzer-Stylesheets alle wichtigen Deklarationen in den Autor-Stylesheets. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animations](/de/docs/Web/CSS/@keyframes) Deklarationen nicht gültig.

Die Umkehrung der Prioritätsordnung für wichtige Deklarationen stellt sicher, dass Nutzer mit besonderen Bedürfnissen, wie zum Beispiel personalisierten Farbschemata oder großen Schriftarten, die Stile des Autors überschreiben können, indem sie einige Deklarationen in ihrem Nutzer-Stylesheet als wichtig markieren. Es garantiert auch, dass bösartige Erweiterungen wichtige User-Agent-Stile nicht überschreiben können, was die Funktionalität beeinträchtigen oder sich negativ auf die Sicherheit auswirken könnte.

Hat etwas Vorrang vor wichtigen Deklarationen? Ja, [Übergänge](/de/docs/Web/CSS/CSS_transitions). CSS-Übergänge sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich die Eigenschaft von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zu einem anderen entspricht eine Eigenschaft keiner speziellen wichtigen Deklaration.

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

In diesem Beispiel wechseln die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand. Obwohl die Standardzustände normale Deklarationen und die Hover-Zustände `!important`-Deklarationen sind, erfolgt der Übergang.

### Kaskadenschichten

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Nutzer und User-Agent – überschreiben normale Deklarationen in ungeschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierte Vorrang vor zuvor deklarierten Schichten hat. Wichtige Deklarationen kehren die Prioritätsreihenfolge um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht, und so weiter. Zudem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb jeder Schicht erfolgen.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributen definiert werden. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schichtebene, aber wichtige Stile aus dem Nutzer- oder User-Agent-Stil-Stylesheets sowie Übergänge überschreiben sie.

### !important und Spezifität

Obwohl `!important` nicht Teil der Bestimmung der Spezifität ist, ist es damit verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von übermäßiger Spezifizierung eines Selektors. Egal wie hoch die Selektor-[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) eine normale Deklaration erfüllt, eine wichtige Deklaration aus derselben Quelle und Kaskadenschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektorspezifität entscheidend. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Reihenfolge der Quelle relevant sein.

## Einfluss auf Kurzschreib-Eigenschaften

Das Deklarieren einer Kurzschreib-Eigenschaft mit `!important` setzt alle Untereigenschaften ebenfalls als wichtig. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der mehreren Gründe, warum die Vermeidung des wichtigen Flags im Allgemeinen empfohlen wird.

## Einfluss auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer benutzerdefinierten Eigenschaftswertdeklaration hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem benutzerdefinierten Eigenschaftswert entfernt. Das `!important`-Flag wird nicht als Teil des benutzerdefinierten Eigenschaftswerts an die [`var()`](/de/docs/Web/CSS/var) Funktion übergeben.

```css
:root {
  --myColor: red !important;
  --myColor: blue;
}
p {
  color: var(--myColor);
}
blockquote {
  color: var(--myColor);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In diesem Beispiel wird der Absatz rot sein, nicht blau, da die Zuweisung des benutzerdefinierten Eigenschaftswerts wichtig ist. Das Blockzitat wird lila sein, weil die lila normale Deklaration nach der normalen roten Deklaration erscheint.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um die Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Selbst wenn Sie daran arbeiten, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie zum Beispiel Stile in einem Plugin von Drittanbietern, die mit einem [id-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert sind, müssen Sie `!important` nicht verwenden. Ziehen Sie stattdessen in Betracht, das Stylesheet-Script eines Drittanbieters in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht mit den erforderlichen Überschreibungen und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Nutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autors, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindern wird, dass einzelne Nutzer mit speziellen Anforderungen, wie große Schriftarten, Ihre Stile überschreiben, indem sie wichtige Stile in ihrem eigenen Nutzer-Stylesheet hinzufügen.

## Browser-Kompatibilität

Dieses Feature wird in allen Browsern unterstützt.

## Siehe auch

- [CSS Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
