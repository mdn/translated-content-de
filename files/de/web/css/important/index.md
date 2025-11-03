---
title: "!important"
slug: Web/CSS/important
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Ein `!`-Trennzeichen gefolgt vom Schlüsselwort `important` kennzeichnet die Deklaration als wichtig. Das `!important`-Flag ändert die Regeln der Deklarationsauswahl innerhalb des [Cascades](/de/docs/Web/CSS/CSS_cascade/Cascade). Eine Deklaration, die nicht _wichtig_ ist, wird als _normal_ bezeichnet.

Um eine Deklaration als wichtig zu kennzeichnen, fügen Sie das _important-Flag_ (`!important`) nach dem Wert in der Deklaration hinzu. Während Leerzeichen zwischen Trennzeichen und Schlüsselwort erlaubt sind, wird das Flag im Allgemeinen ohne Leerzeichen als `!important` geschrieben.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

Das `!important` steht nach dem Wert des Eigenschaft-Wert-Paar-Deklaration, gefolgt von null oder mehr Leerzeichen. Das important-Flag muss das letzte Token in der Deklaration sein. Mit anderen Worten, es können Leerzeichen und Kommentare zwischen dem Flag und dem abschließenden Semikolon der Deklaration stehen, aber nichts anderes.

## Auswirkungen auf die Cascade

Bei wichtigen Deklarationen werden die [Ursprünge und Ebenen der Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) umgekehrt. Ohne das important-Flag überschreiben Deklarationen in den Stilen des Autors Deklarationen in einem Benutzer-Stil und diese überschreiben die Deklarationen im Standard-Stil des Benutzer-Agenten.

Wenn eine Deklaration wichtig ist, wird die Reihenfolge der Vorrangigkeit umgekehrt. Als wichtig gekennzeichnete Deklarationen in den Benutzer-Agent-Stilen überschreiben alle wichtigen Deklarationen in den Benutzerstilen. Ebenso überschreiben alle wichtigen Deklarationen in den Benutzerstilen alle wichtigen Deklarationen in den Stilen des Autors. Schließlich haben alle wichtigen Deklarationen Vorrang vor allen Animationen.

> [!NOTE]
> Alle wichtigen Deklarationen haben Vorrang vor allen Animationen. `!important` ist innerhalb von [@keyframes-Animationen](/de/docs/Web/CSS/@keyframes) nicht gültig.

Das Umkehren der Vorrangreihenfolge für wichtige Deklarationen stellt sicher, dass Benutzer mit besonderen Bedürfnissen, wie z.B. personalisierte Farbschemata oder große Schriftarten, die Autorstile überschreiben können, wenn erforderlich, indem sie einige Deklarationen in ihrem Benutzer-Stil als wichtig markieren. Es garantiert auch, dass schädliche Erweiterungen keine wichtigen Benutzer-Agent-Stile überschreiben können, was Funktionalität beeinträchtigen oder die Sicherheit negativ beeinflussen könnte.

Gibt es etwas, das Vorrang vor wichtigen Deklarationen hat? Ja, [Transitions](/de/docs/Web/CSS/CSS_transitions). CSS-Transitionen sind eine Möglichkeit, die Geschwindigkeit zu steuern, mit der sich eine Eigenschaft von einem Wert in einen anderen ändert. Beim Übergang von einem Wert zu einem anderen wird eine Eigenschaft keine bestimmte wichtige Deklaration erfüllen.

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

In diesem Beispiel werden die Eigenschaften `color` und `background-color` in den Hover-Zustand über zwei Sekunden hinweg übergehen. Auch wenn die Standardzustände normale Deklarationen sind und Hover-Zustände `!important` Deklarationen, findet der Übergang dennoch statt.

### Cascade-Ebenen

Innerhalb jedes der drei Ursprünge der Stylesheets – Autor, Benutzer und Benutzer-Agent – überschreiben normale Deklarationen in unebenen Stilen verschachtelte Deklarationen, wobei die zuletzt deklarierte Vorrang über den zuvor erklärten Schichten hat. Wichtige Deklarationen kehren die Reihenfolge der Vorrangigkeit um: Wichtige Deklarationen in der ersten Schicht haben Vorrang vor wichtigen Deklarationen in der nächsten Schicht usw. Auch alle wichtigen Deklarationen haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gemacht wurden.

### Inline-Stile

Inline-Stile sind Stile, die mit den [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributen definiert sind. Sie können auch normal oder wichtig sein. Inline _normale_ Stile haben Vorrang vor allen _normalen_ Deklarationen, unabhängig vom Ursprung. Inline _wichtige_ Stile haben Vorrang vor allen anderen _wichtigen_ Autorenstilen, unabhängig von der Schicht, aber wichtige Stile aus Benutzer- oder Benutzer-Agent-Stylesheets und Transitionen überschreiben sie.

### !important und Spezifität

Während `!important` nicht Teil der Bestimmung der Spezifität ist, ist es verwandt. Wichtige Deklarationen überschreiben alle anderen Deklarationen aus dem gleichen [Ursprung und Cascade-Ebene](/de/docs/Web/CSS/CSS_cascade/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Dieses Beispiel zeigt einen Fall von Über-Spezifizierung eines Selektors. Egal wie hoch die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) eines Selektors mit einer normalen Deklaration übereinstimmt, eine wichtige Deklaration aus derselben Quelle und Cascade-Ebene hat immer Vorrang. In diesem Fall wird der Absatz immer rot sein.

Wenn zwei wichtige Deklarationen aus demselben Ursprung und derselben Ebene auf dasselbe Element angewendet werden, wählen Browser die Deklaration mit der höchsten Spezifität aus und verwenden sie.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

In diesem Fall ist die Spezifität des Selektors von Bedeutung. Nur wenn die Selektoren die gleiche Spezifität hätten, würde die Quellreihenfolge eine Rolle spielen.

## Auswirkungen auf Kurzschrift-Eigenschaften

Durch die Deklaration einer Kurzschrift-Eigenschaft mit `!important` werden alle Untereigenschaften als wichtig festgelegt. Die beiden folgenden Selektor-Stilblöcke sind gleichwertig:

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

Dieses Beispiel zeigt einen der vielen Gründe, warum es im Allgemeinen empfohlen wird, das important-Flag zu vermeiden.

## Auswirkungen auf benutzerdefinierte Eigenschaften

Wenn das `!important`-Flag zu einer benutzerdefinierten Eigenschaftswert-Deklaration hinzugefügt wird, wird die Wertzuweisung wichtig gemacht. Das `!important`-Flag wird dann aus dem benutzerdefinierten Eigenschaftswert entfernt. Das `!important`-Flag wird nicht als Teil des benutzerdefinierten Eigenschaftswerts an die [`var()`](/de/docs/Web/CSS/var)-Funktion übergeben.

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

In diesem Beispiel wird der Absatz rot und nicht blau, da die Zuweisung des benutzerdefinierten Eigenschaftswerts wichtig ist. Der Blocksatz wird lila sein, da die lila normale Deklaration nach der normalen roten Deklaration kommt.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Beste Praktiken

Vermeiden Sie die Verwendung von `!important`, um die Spezifität zu überschreiben. Wenn Sie absichtlich wichtige Deklarationen für UI-Anforderungen erstellen, kommentieren Sie Ihren CSS-Code, um den Betreuern zu erklären, warum sie dieses Feature nicht überschreiben sollten.

Selbst wenn Sie versuchen, hochspezifische Stile zu überschreiben, die nicht unter Ihrer Kontrolle stehen, wie z.B. Stile in einem Drittanbieter-Plugin, das mit einem [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) deklariert wurde, sollten Sie kein `!important` verwenden. Erwägen Sie stattdessen, das Drittanbieter-Stylesheet-Skript in eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/@layer) als Ihre erste Cascade-Ebene zu importieren, anstatt `!important` zu verwenden. Solange die externen Stile keine wichtigen Deklarationen enthalten, werden Ihre Stile Vorrang vor den Widget-Stilen haben, unabhängig von der Spezifität.

Wenn Sie ein externes Stylesheet überschreiben müssen, das wichtige Deklarationen enthält, erstellen Sie eine Cascade-Ebene, die die benötigten Überschreibungen enthält, und deklarieren Sie diese Ebene zuerst.

### Barrierefreiheitsbedenken

Wichtige Stile aus einem Benutzer-Stylesheet haben Vorrang vor den wichtigen Deklarationen des Autoren-Stylesheets, was bedeutet, dass das Hinzufügen eines `!important`-Flags zu den Stilen einer Website nicht verhindern wird, dass einzelne Benutzer mit besonderen Anforderungen, wie z.B. großen Schriftarten, Ihre Stile überschreiben können, indem sie in ihrem eigenen benutzerdefinierten Stylesheet wichtige Stile hinzufügen.

## Browser-Kompatibilität

Diese Funktion wird in allen Browsern unterstützt.

## Siehe auch

- [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
