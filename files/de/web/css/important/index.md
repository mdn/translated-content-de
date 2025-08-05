---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Ein `!`-Begrenzer gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag verändert die Regeln, die Deklarationen innerhalb des [Kaskadierens](/de/docs/Web/CSS/CSS_cascade/Cascade) auswählen. Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Begrenzer und dem Schlüsselwort erlaubt sind, wird das Flag generell als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` kommt nach dem Wert des Eigenschaft-Wert-Paar-Deklaration, vorangestellt von null oder mehr Leerzeichen. Das important-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Einfluss auf das Kaskadieren

Wenn es um wichtige Deklarationen geht, sind die [Ursprungs- und Schichtebenen-Reihenfolgen](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das important-Flag überschreiben Deklarationen im Autoren-Stilblatt Deklarationen im Benutzer-Stilblatt, welche Deklarationen im standardmäßigen Stilblatt des Benutzer-Agenten überschreiben.

Wenn eine Deklaration wichtig ist, wird die Prioritätenreihenfolge umgekehrt. Deklarationen, die im Benutzer-Agenten-Stilblatt als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stilblättern. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stilblättern alle wichtigen Deklarationen in den Autoren-Stilblättern. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes-Animationen](/de/docs/Web/CSS/@keyframes) Deklarationen nicht gültig.

Die Umkehrung der Prioritätenreihenfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie personalisierten Farbschemata oder großen Schriftarten, Autorenstile bei Bedarf überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stilblatt als wichtig markieren. Es garantiert auch, dass böswillige Erweiterungen keine wichtigen Benutzer-Agenten-Stile überschreiben können, die möglicherweise Funktionen beeinträchtigen oder die Sicherheit negativ beeinflussen könnten.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Transitions](/de/docs/Web/CSS/CSS_transitions). CSS-Transitions sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich eine Eigenschaft von einem Wert zum anderen ändert. Während des Übergangs von einem Wert zum anderen stimmt eine Eigenschaft nicht mit einer bestimmten wichtigen Deklaration überein.

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

In diesem Beispiel werden die Eigenschaften `color` und `background-color` zum Hover-Zustand über zwei Sekunden überblenden. Auch wenn Standardzustände normale Deklarationen und Hover-Zustände `!important`-Deklarationen sind, findet der Übergang statt.

### Kaskadierschichten

Innerhalb jedes der drei Ursprünge für Stilblätter – Autor, Benutzer und Benutzer-Agent – überschreiben normale Deklarationen in nicht geschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierte Vorrang vor den zuvor deklarierten Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Priorität um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht vorgenommen wurden.

### Inline-Stile

Inline-Stile sind Stile, die mithilfe der [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribute definiert werden. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autoren-Stilen, unabhängig von der Schicht, aber wichtige Stile aus Benutzer- oder Benutzer-Agent-Stilblättern und Transitionen überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung der Spezifität ist, ist es damit verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und Kaskadierschicht](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von übermäßiger Spezifizierung eines Selektors. Egal wie hoch der Selektor-[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus derselben Quelle und Kaskadierschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Spezifität des Selektors von Bedeutung. Nur wenn die Selektoren dieselbe Spezifität hätten, würde die Quellreihenfolge von Bedeutung sein.

## Einfluss auf Kurzschreibweise-Eigenschaften

Wenn eine Kurzschreibweise-Eigenschaft mit `!important` deklariert wird, werden alle Untereigenschaften als wichtig gesetzt. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der mehrere Gründe, warum das Vermeiden des important-Flags im Allgemeinen empfohlen wird.

## Einfluss auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Deklaration des Wertes einer benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot sein, nicht blau, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, da die normale lila Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Wartenden zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Selbst wenn Sie daran arbeiten, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie zum Beispiel Stile in einem 3rd Party-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert wurden, müssen Sie `!important` nicht verwenden. Ziehen Sie stattdessen in Betracht, das Stylesheet-Skript der Drittanbieter in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadierschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile über den Widget-Stilen Vorrang haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadierschicht, die die erforderlichen Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stilblatt haben Vorrang vor den wichtigen Deklarationen im Autoren-Stilblatt, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilvorlagen einer Website nicht verhindert, dass einzelne Benutzer mit besonderen Anforderungen, wie großen Schriften, Ihre Stile durch das Hinzufügen wichtiger Stile in ihrem eigenen Benutzer-Stilblatt überschreiben können.

## Browser-Kompatibilität

Diese Funktion wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
