---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Ein `!`-Trennzeichen, gefolgt vom Schlüsselwort `important`, kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln zur Auswahl von Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _wichtige Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` kommt nach dem Wert des Eigenschaftswert-Paar-Deklaration, wobei mindestens ein Leerzeichen davorstehen muss. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Kaskade

Wenn es um wichtige Deklarationen geht, werden die [Kaskade-Origin- und Schicht-Reihenfolgen](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Autoren-Stylesheets Deklarationen in einem Benutzer-Stylesheet, das wiederum Deklarationen im Standard-Stylesheet des Benutzeragenten überschreibt.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die im Stylesheet des Benutzeragenten als wichtig gekennzeichnet sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stylesheets alle wichtigen Deklarationen in den Autoren-Stylesheets. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animation](/de/docs/Web/CSS/@keyframes)-Deklarationen nicht gültig.

Die Umkehrung der Prioritätsordnung für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie z.B. personalisierte Farbschemata oder große Schriftarten, die Autorenstile bei Bedarf überschreiben können, indem sie einige Deklarationen in ihrem Benutzer-Stylesheet als wichtig kennzeichnen. Es stellt auch sicher, dass bösartige Erweiterungen die wichtigen Benutzeragentenstile nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Transitionen](/de/docs/Web/CSS/CSS_transitions). CSS-Transitionen sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich der Eigenschaftswert von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zum anderen wird eine Eigenschaft nicht mit einer bestimmten wichtigen Deklaration übereinstimmen.

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

In diesem Beispiel wechseln die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand. Auch wenn Standardzustände normale Deklarationen und Hover-Zustände `!important`-Deklarationen sind, findet der Übergang dennoch statt.

### Kaskadierungsschichten

Innerhalb der drei Ursprünge für Stylesheets – Autor, Benutzer und Benutzeragent – überschreiben normale Deklarationen in nicht geschichteten Stilen geschichtete Stil-Deklarationen, wobei die zuletzt deklarierten Vorrang vor den vorher deklarierten Schichten haben. Wichtige Deklarationen kehren die Reihenfolge der Priorität um: wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht, und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb jeglicher Schicht vorgenommen wurden.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert sind. Sie können auch normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus den Benutzer- oder Benutzeragenten-Stylesheets und Transitionen überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung von Spezifität ist, ist es damit verbunden. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Kaskadierungsschicht](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall des Über-Spezifizierens eines Selektors. Egal wie hoch die Spezifität des Selektors einem normalen Deklaration entspricht, eine wichtige Deklaration aus derselben Quelle und der Kaskadierschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektorspezifität entscheidend. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge von Bedeutung sein.

## Auswirkungen auf Kurzschreibweise-Eigenschaften

Das Deklarieren einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften auf wichtig. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der vielen Gründe, warum die Vermeidung des wichtigen Flags im Allgemeinen empfohlen wird.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Deklaration eines benutzerdefinierten Eigenschaftswerts hinzugefügt wird, wird die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot und nicht blau, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila, da die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie in Ihrem CSS-Code, um den Wartenden zu erklären, warum sie diese Funktion nicht überschreiben sollten.

Selbst bei der Arbeit zum Überschreiben von hochspezifischen Stilen, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem Drittanbieter-Plugin, die mit einem [id-Selector](/de/docs/Web/CSS/ID_selectors) deklariert sind, brauchen Sie `!important` nicht zu verwenden. Erwägen Sie stattdessen, das Stylesheet-Skript von Drittanbietern in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) als Ihre erste Kaskadierungsschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile über den Widget-Stilen Vorrang haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadierungsschicht, die die benötigten Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets. Das Hinzufügen eines `!important`-Flags zu den Stilen einer Website wird nicht verhindern, dass einzelne Benutzer mit speziellen Anforderungen, wie großen Schriftarten, Ihre Stile überschreiben können, indem sie wichtige Stile in ihrem eigenen Benutzer-Stylesheet hinzufügen.

## Browser-Kompatibilität

Dieses Feature wird in allen Browsern unterstützt.

## Siehe auch

- [CSS Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
