---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Ein `!`-Abgrenzer gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln, die innerhalb der [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) Deklarationen auswählen. Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _important flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Abgrenzer und dem Schlüsselwort erlaubt sind, wird das Flag in der Regel als `!important` ohne Leerzeichen geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert des Eigenschaftswertepaar-Deklaration, gefolgt von mindestens einem Leerzeichen. Das wichtige Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Cascade

Bei wichtigen Deklarationen werden die [Cascade-Ursprünge und Schichtebenen](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das wichtige Flag überschreiben Deklarationen in den Stylesheets des Autors Deklarationen in einem Benutzerstylesheet, das wiederum Deklarationen im Standard-Stylesheet des User-Agents überschreibt.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die in den Stylesheets des User-Agents als wichtig gekennzeichnet sind, überschreiben alle wichtigen Deklarationen in den Benutzerstylesheets. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzerstylesheets alle wichtigen Deklarationen in den Stylesheets des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes animation](/de/docs/Web/CSS/@keyframes)-Deklarationen nicht gültig.

Das Umkehren der Prioritätsreihenfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie z. B. personalisierten Farbschemata oder großen Schriftarten, bei Bedarf die Autorenstile durch Markieren einiger Deklarationen in ihrem Benutzerstylesheet als wichtig, überschreiben können. Es stellt auch sicher, dass bösartige Erweiterungen die wichtigen User-Agent-Stile nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat etwas Vorrang gegenüber wichtigen Deklarationen? Ja, [Transitions](/de/docs/Web/CSS/CSS_transitions). CSS-Transitions sind ein Mittel, um die Geschwindigkeit zu steuern, mit der sich die Eigenschaft von einem Wert in einen anderen ändert. Während des Übergangs von einem Wert in einen anderen stimmt eine Eigenschaft nicht mit einer bestimmten wichtigen Deklaration überein.

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

In diesem Beispiel werden die Eigenschaften `color` und `background-color` über zwei Sekunden in den Hover-Zustand übergehen. Obwohl die Standardzustände normale Deklarationen und Hover-Zustände `!important`-Deklarationen sind, findet der Übergang statt.

### Cascade-Schichten

Innerhalb jedes der drei Ursprünge für Stylesheets – Autor, Benutzer und User-Agent – überschreiben normale Deklarationen in ungeschichteten Styles geschichtete Deklarationen, wobei die zuletzt deklarierten Vorrang vor den zuvor deklarierten Schichten haben. Wichtige Deklarationen kehren die Reihenfolge der Priorität um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht und so weiter. Außerdem haben alle wichtigen Deklarationen Vorrang gegenüber wichtigen Deklarationen außerhalb einer Schicht.

### Inline-Stile

Inline-Stile sind Stile, die unter Verwendung des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs definiert werden. Sie können ebenfalls normal oder wichtig sein. Inline-_normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline-_wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus Benutzer- oder User-Agent-Stylesheets und Transitions überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung der Spezifität ist, ist es damit verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und Cascade-Schicht](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von übermäßiger Spezifizierung eines Selektors. Egal wie hoch die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) eines selektierten normalen Selektors ist, eine wichtige Deklaration aus derselben Quelle und Cascade-Schicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektorspezifität entscheidend. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzschreib-Eigenschaften

Das Deklarieren einer Kurzschreib-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die folgenden beiden Stilblöcke sind gleichwertig:

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

Wenn das `!important`-Flag zu einer Wertdeklaration der benutzerdefinierten Eigenschaft hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Werts der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot sein, nicht blau, da die Wertzuweisung der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Kommentieren Sie in Ihrem CSS-Code, warum es nötig ist, wenn Sie absichtlich wichtige Deklarationen für Benutzeroberflächenanforderungen erstellen, damit Wartende sie nicht überschreiben.

Selbst wenn Sie daran arbeiten, hoch spezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie etwa Stile in einem Drittanbieter-Plugin, die mit einem [ID-Selektor](/de/docs/Web/CSS/ID_selectors) deklariert sind, müssen Sie `!important` nicht verwenden. Ziehen Sie stattdessen in Betracht, das Drittanbieter-Stylesheet-Skript als [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) in Ihre erste Cascade-Schicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, haben Ihre Stile Vorrang vor den Widget-Stilen, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Cascade-Schicht, die die benötigten Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzerstylesheet haben Vorrang vor den wichtigen Deklarationen des Autorenstylesheets. Das bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindert, dass individuelle Benutzer mit besonderen Anforderungen, wie z. B. großen Schriftarten, Ihre Stile durch Hinzufügen wichtiger Stile in ihrem eigenen Benutzerstylesheet überschreiben können.

## Browser-Kompatibilität

Dieses Feature wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
