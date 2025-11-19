---
title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln der Auswahl von Deklarationen innerhalb der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu markieren, fügen Sie das _wichtig-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen dem Trennzeichen und dem Schlüsselwort erlaubt sind, wird das Flag generell ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` kommt nach dem Wert des Eigenschaft-Wert-Paares und wird von null oder mehr Leerzeichen begleitet. Das wichtig-Flag muss das letzte Token der Deklaration sein. Das bedeutet, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, jedoch nichts anderes.

## Auswirkung auf die Kaskade

Bei wichtigen Deklarationen sind die [Ursprung- und Schichten-Reihenfolgen](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Kaskade umgekehrt. Ohne das wichtig-Flag überschreiben Deklarationen in den Autoren-Stilvorlagen die Deklarationen in einer Benutzer-Stilvorlage, die wiederum die Deklarationen in der Standard-Stilvorlage des Benutzeragenten überschreiben.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Priorität umgekehrt. Deklarationen, die als wichtig in den Benutzeragent-Stilvorlagen markiert sind, überschreiben alle wichtigen Deklarationen in den Benutzer-Stilvorlagen. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzer-Stilvorlagen alle wichtigen Deklarationen in den Autoren-Stilvorlagen. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes Animation](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Deklarationen nicht gültig.

Die Umkehrung der Prioritätenordnung für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie z.B. personalisierte Farbschemata oder große Schriftarten, in der Lage sind, Autoren-Stile zu überschreiben, wenn nötig, indem sie einige Deklarationen in ihrer Benutzer-Stilvorlage als wichtig markieren. Es garantiert auch, dass böswillige Erweiterungen wichtige Benutzeragent-Stile nicht überschreiben können, was die Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Hat irgendetwas Vorrang vor wichtigen Deklarationen? Ja, [Übergänge](/de/docs/Web/CSS/Guides/Transitions). CSS-Übergänge sind ein Mittel, um die Geschwindigkeit zu kontrollieren, mit der sich eine Eigenschaft von einem Wert zu einem anderen ändert. Während des Übergangs von einem Wert zu einem anderen wird eine Eigenschaft keiner bestimmten wichtigen Deklaration entsprechen.

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

In diesem Beispiel werden die Eigenschaften `color` und `background-color` über zwei Sekunden in den schwebenden Zustand übergehen. Selbst wenn Standardzustände normale Deklarationen sind und Schwebezustände `!important`-Deklarationen sind, erfolgt der Übergang.

### Kaskadenschichten

Innerhalb eines jeden der drei Ursprünge für Stilvorlagen – Autor, Benutzer und Benutzeragent – überschreiben normale Deklarationen in ungeschichteten Stilen die geschichteten Stil-Deklarationen, wobei die zuletzt erklärte Vorrang vor den vorher erklärten Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Vorrangstellung um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor den wichtigen Deklarationen in der nächsten Schicht und so weiter. Auch alle wichtigen Deklarationen haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht vorgenommen wurden.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert werden. Sie können auch normal oder wichtig sein. Inline _normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline _wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autoren-Stilen, unabhängig von der Schicht, aber wichtige Stile aus Benutzer- oder Benutzeragenten-Stilvorlagen und Übergängen überschreiben sie.

### !important und Spezifität

Auch wenn `!important` kein Teil der Bestimmung der Spezifität ist, ist es doch damit verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Kaskadenschicht](/de/docs/Web/CSS/Guides/Cascade/Introduction).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall der Über-Spezifikation eines Selektors. Egal, wie hoch die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) des Selektors zu einer normalen Deklaration passt, eine wichtige Deklaration aus der gleichen Quelle und Kaskadenschicht wird immer Vorrang haben. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus dem gleichen Ursprung und der gleichen Schicht auf das gleiche Element angewendet werden, wählen und verwenden Browser die Deklaration mit der höchsten Spezifität.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall zählt die Selektor-Spezifität. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzschreibweise-Eigenschaften

Eine Kurzschreibweise-Eigenschaft mit `!important` zu deklarieren, macht alle Untereigenschaften ebenfalls wichtig. Die zwei folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der mehreren Gründe, warum es im Allgemeinen empfohlen wird, das wichtig-Flag zu vermeiden.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer Wert-Deklaration einer benutzerdefinierten Eigenschaft hinzugefügt wird, wird die Wertzuweisung als wichtig markiert. Das `!important`-Flag wird dann aus dem Wert der benutzerdefinierten Eigenschaft entfernt. Das `!important`-Flag wird nicht als Teil des Wertes der benutzerdefinierten Eigenschaft an die [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot sein, nicht blau, da die Zuweisung des Werts der benutzerdefinierten Eigenschaft wichtig ist. Das Blockzitat wird lila sein, da die normale lila Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best Practices

Vermeiden Sie die Verwendung von `!important`, um die Spezifität zu überschreiben. Beim bewussten Erstellen wichtiger Deklarationen für UI-Anforderungen kommentieren Sie Ihren CSS-Code, um den Administratoren zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Selbst wenn Sie versuchen, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie Stile in einem Drittanbieter-Plugin, die mit einem [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert sind, müssen Sie `!important` nicht verwenden. Berücksichtigen Sie stattdessen, das Stylesheet-Skript des Drittanbieters als Ihre erste Kaskadenschicht in einer [benannten oder anonymen Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, haben Ihre Stile Vorrang vor den Widget-Stilen, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Kaskadenschicht, die die benötigten Überschreibungen enthält, und deklarieren Sie diese Schicht zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einer Benutzer-Stilvorlage haben Vorrang vor den wichtigen Deklarationen der Autoren-Stilen, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindern wird, dass individuelle Benutzer mit besonderen Anforderungen, wie z.B. großen Schriftarten, Ihre Stile überschreiben können, indem sie wichtige Stile in ihrer eigenen Benutzer-Stilvorlage hinzufügen.

## Browser-Kompatibilität

Dieses Feature wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
