---
title: "`!important` CSS-Schlüsselwort"
short-title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Ein `!` Trennzeichen gefolgt vom `important` Schlüsselwort kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln zur Auswahl von Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` kommt nach dem Wert des Eigenschafts-Werte-Paars der Deklaration, gefolgt von null oder mehreren Leerzeichen. Das Important-Flag muss das letzte Token in der Deklaration sein. In anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Kaskade

Bei wichtigen Deklarationen wird die Reihenfolge der [Kaskadenherkunft und -schichten](/de/docs/Web/CSS/Guides/Cascade/Introduction) umgekehrt. Ohne das Important-Flag überschreiben Autor-Stylesheet-Deklarationen Benutzerstylesheet-Deklarationen, die wiederum Benutzeragent-Stylesheet-Deklarationen überschreiben.

Wenn eine Deklaration wichtig ist, wird die Rangfolge umgekehrt. Deklarationen, die in Benutzeragent-Stylesheets als wichtig markiert sind, überschreiben alle wichtigen Deklarationen in Benutzerstylesheets. Ebenso überschreiben alle wichtigen Deklarationen in Benutzerstylesheets alle wichtigen Deklarationen in Autor-Stylesheets. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist nicht gültig innerhalb von [@keyframes Animation](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Deklarationen.

Das Umkehren der Rangfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie personalisierten Farbschemata oder großen Schriftarten, Autor-Styles überschreiben können, wenn nötig, indem sie einige Deklarationen in ihrem Benutzerstylesheet als wichtig markieren. Es garantiert auch, dass bösartige Erweiterungen wichtige Benutzeragent-Styles nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Transitions](/de/docs/Web/CSS/Guides/Transitions). CSS-Transitions sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich die Eigenschaft von einem Wert auf einen anderen ändert. Während des Übergangs von einem Wert zu einem anderen wird eine Eigenschaft nicht mit einer bestimmten wichtigen Deklaration übereinstimmen.

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

In diesem Beispiel werden die Eigenschaften `color` und `background-color` in den Hover-Zustand über zwei Sekunden übergehen. Auch wenn Standardzustände normale Deklarationen sind und Hover-Zustände `!important` Deklarationen sind, erfolgt der Übergang.

### Kaskadenschichten

Innerhalb jeder der drei Ursprünge für Stylesheets – Autor, Benutzer und Benutzeragent – überschreiben normale Deklarationen in nicht geschichteten Styles geschichtete Style-Deklarationen, wobei die zuletzt deklarierte Präferenz über die zuvor deklarierten Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Präferenzen um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht usw. Außerdem haben alle wichtigen Deklarationen Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gemacht werden.

### Inline-Styles

Inline-Styles sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert sind. Sie können auch normal oder wichtig sein. Inline _normale_ Styles haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline _wichtige_ Styles haben Vorrang vor allen anderen _wichtigen_ Autor-Styles, unabhängig von der Schicht, aber wichtige Styles aus Benutzer- oder Benutzeragent-Stylesheets und Transitions überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung der Spezifität ist, steht es in Zusammenhang. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus demselben [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/Guides/Cascade/Introduction).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von übermäßiger Spezifizierung eines Selektors. Egal wie hoch die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) eines Selektors eine normale Deklaration trifft, eine wichtige Deklaration aus derselben Quelle und Kaskadenschicht hat immer Vorrang. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus dem gleichen Ursprung und der gleichen Schicht auf dasselbe Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifizität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Selektor-Spezifizität wichtig. Nur wenn die Selektoren die gleiche Spezifizität hätten, wäre die Quellreihenfolge von Bedeutung.

## Auswirkungen auf Kurzschreibweise-Eigenschaften

Das Deklarieren einer Kurzschreibweise-Eigenschaft mit `!important` setzt alle Untereigenschaften als wichtig. Die beiden folgenden Selektor-Style-Blöcke sind äquivalent:

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

Dieses Beispiel zeigt einen der mehreren Gründe, warum das Vermeiden des Important-Flags im Allgemeinen empfohlen wird.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer benutzerdefinierten Eigenschaftswert-Deklaration hinzugefügt wird, macht es die Wertzuweisung wichtig. Das `!important`-Flag wird dann aus dem benutzerdefinierten Eigenschaftswert entfernt. Das `!important`-Flag wird nicht als Teil des benutzerdefinierten Eigenschaftswerts zur [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot und nicht blau, da die benutzerdefinierte Eigenschaftswertzuweisung wichtig ist. Das blockquote wird lila, weil die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Wartungspersonen zu erklären, warum sie diese Funktion nicht überschreiben sollten.

Selbst wenn Sie daran arbeiten, Stile mit hoher Spezifität, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem Drittanbieter-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert ist, zu überschreiben, müssen Sie `!important` nicht verwenden. Erwägen Sie stattdessen, das Drittanbieter-Stylesheet-Skript in eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) als Ihre erste Kaskadenschicht zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht, die die benötigten Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzerstylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindert, dass einzelne Benutzer mit speziellen Anforderungen, wie großen Schriftarten, Ihre Stile durch das Hinzufügen wichtiger Stile in ihrem eigenen Benutzerstylesheet überschreiben können.

## Browser-Kompatibilität

Dieses Feature wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
