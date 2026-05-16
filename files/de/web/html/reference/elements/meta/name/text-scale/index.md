---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{SeeCompatTable}}

Der **`text-scale`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut eines {{htmlelement("meta")}} Elements ermöglicht es, die Seite so zu gestalten, dass das anfängliche {{cssxref("font-size")}} des {{htmlelement("html")}} Wurzelelements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers skaliert wird.

> [!WARNING]
> Falls Sie `<meta name="text-scale" content="scale" />` auf Ihrer Website einfügen, um dieses Textskalierungsverhalten zu aktivieren, müssen Sie testen, dass es Textgrößen bis zum maximalen Textskalierungsfaktor für Ihre Zielplattformen unterstützt. Dies reicht typischerweise von 200 % bis über 300 % auf mobilen Plattformen, wobei einige Barrierefreiheitsfunktionen noch größere Textskalierung ermöglichen. Stellen Sie sicher, dass Ihre Website nicht unansehnlich wirkt, wenn Benutzer größere oder kleinere Schriftgrößen-Einstellungen im Betriebssystem einstellen.

## Nutzungshinweise

Ein `<meta name="text-scale">` Element hat folgende zusätzliche Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Gibt das Skalierungs-Verhalten für {{cssxref("font-size")}} an.
    Sein Wert ist ein Schlüsselwort, das eines der folgenden sein kann:
    - `scale`
      - : Optiert die Seite dafür, dass das anfängliche {{cssxref("font-size")}} des {{htmlelement("html")}} Wurzelelements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers skaliert wird. Es sorgt auch dafür, dass der Browser bestehende browserbasierte Mechanismen und Heuristiken deaktiviert (z.B. Text-Auto-Sizing auf Mobilgeräten).
    - `legacy`
      - : Der Standardwert. Die Seite ist nicht so eingestellt, dass das `font-size` des Wurzelelements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers skaliert wird. Es hat denselben Effekt, als wenn das `<meta>` Element überhaupt nicht enthalten wäre (Betriebssystem-Schriftpräferenzen werden ignoriert).

## Beschreibung

Das `<meta name="text-scale" content="scale" />` Element kann im {{htmlelement("head")}} eines Dokuments enthalten sein, um dem Browser mitzuteilen, dass die Seite so dimensioniert ist, dass sie gut über verschiedene benutzerselektierte Schriftgrößenpräferenzen skaliert; es deaktiviert auch bestehende browserbasierte Mechanismen und Heuristiken.

Speziell definiert es den Wert des anfänglichen `font-size` des {{htmlelement("html")}} Wurzelelements, um im Verhältnis zu benutzerdefinierten Betriebs- und Browser-Schriftgrößeneinstellungen zu skalieren. Der {{cssxref("initial")}} Wert der Wurzel {{cssxref("font-size")}} ist `medium`, welcher den Wert der [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem) Einheit definiert. Vorausgesetzt, Sie setzen oder lassen das Wurzel `font-size` standardmäßig auf eine [lokale oder wurzel-schrift-relative `<length>`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) Einheit, wird jede nachfolgende Schlüsselwortangabe (wie `medium`) oder schriftbezogene Länge (wie `em` und `rem`) im Verhältnis zu den Schriftgrößeinstellungen des Betriebssystems oder Browsers skaliert.

Zum Beispiel, mit `<meta name="text-scale" content="scale">` auf der Seite enthalten, würde die folgende Regel:

```css
p {
  font-size: medium;
}
```

dazu führen, dass alle {{htmlelement("p")}} Elemente eine skalierte Schriftgröße erhalten. Sie könnten auch `font-size` auf `initial` setzen, um denselben Effekt zu erzielen.

Auf mobilen Plattformen ist dies standardmäßig nicht der Fall. `<meta name="text-scale" content="scale" />` aktiviert diese Skalierung. Auf Desktop-Plattformen hat das den Effekt, dass die [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale) Umgebungsvariable den Multiplikator widerspiegelt, der den Browser-Schriftgrößeinstellungen entspricht, aber ansonsten hat es keinen erkennbaren Vorteil.

### Nutzungssummary

Zusammengefasst sollten Sie `scale` nur setzen, wenn Ihre App für Schriftgrößenskalen ausgelegt ist. Empfohlene Verwendung:

1. Fügen Sie `<meta name="text-scale" content="scale" />` im `<head>` Ihrer Seite ein.
2. Überschreiben Sie nicht das anfängliche {{cssxref(":root")}} `font-size` mit einem [absoluten Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) Wert (wie `16px`).
3. Verwenden Sie nur [schriftbezogene Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) wie `em`/`rem` oder Schlüsselwörter wie `small`, `x-large`, etc., um Inhalte zu dimensionieren.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

Die Verwendung von `<meta name="text-scale" />`, um Abmessungen relativ zu den Textskalierungseinstellungen des Betriebssystems zu dimensionieren, wird gegenüber der [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale) Umgebungsvariable empfohlen. Sie haben ähnliche Effekte auf mobilen Geräten, aber `<meta>` bietet auch Verbesserungen für Desktop-Browser (und ist einfacher zu benutzen).

Vermeiden Sie die gleichzeitige Verwendung beider Funktionen, da die Textskalierung ansonsten doppelt angewendet werden könnte, wodurch kleine schriftbezogene Dimensionen kleiner und große schriftbezogene Dimensionen größer würden.

## Beispiele

### Meta Viewport Textskalierungs-Demonstration

Dieses Beispiel zeigt den Effekt von `<meta name="text-scale" content="scale">`.

#### HTML

Wir fügen das `<meta name="text-scale" content="scale">` Element im Dokument `<head>` ein, plus ein [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) Element, um eine korrekte Darstellung auf mobilen Geräten zu gewährleisten. Wir fügen auch etwas Textinhalt in {{htmlelement("p")}} Elemente ein, wobei verschiedene `class` Attribute gesetzt werden, um sie mit unterschiedlichen Stilen anzusprechen.

```html live-sample___text-scale
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size obeys the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences, even with
      text-scale set.
      <span class="text-scale">But this font size does!</span>
    </p>
  </body>
</html>
```

```html hidden live-sample___no-text-scale
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size does not obey the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences.
      <span class="text-scale">Neither does this!</span>
    </p>
  </body>
</html>
```

#### CSS

Textcontainer mit einer `class` von `text-scale` erhalten eine {{cssxref("font-size")}} von `1rem`, was bedeutet, dass in Browsern, die `<meta name="text-scale" content="scale">` unterstützen, dieser Text skaliert wird, wenn die OS/Browser Schriftgrößeneinstellungen geändert werden. Textcontainer mit einer `class` von `fixed` erhalten eine `font-size` von `20px`, was bedeutet, dass dieser Text bei festen Größen bleibt, wenn die OS/Browser Schriftgrößeneinstellungen geändert werden.

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Ergebnis

Diese Version enthält das `<meta name="text-scale">` Element:

{{embedlivesample("text-scale", "100%", "200")}}

Diese Version enthält das `<meta name="text-scale">` Element NICHT:

{{embedlivesample("no-text-scale", "100%", "200")}}

Testen Sie diese Beispiele in einem mobilen Browser. Ändern Sie die bevorzugte Schriftgröße in den Anzeige- oder Barrierefreiheitseinstellungen des mobilen Geräts. Beachten Sie, wie im ersten Beispiel, wenn `<meta name="text-scale">` enthalten ist, die oberen und unteren Textzeilen proportional zu den OS-Einstellungen skalieren, während die mittlere Zeile, deren `font-size` mit absoluten Einheiten gesetzt wurde, nicht die Größe ändert. Ohne das `<meta name="text-scale">` Element skaliert der Text nicht proportional mit den OS-Einstellungen.

Um das Testen zu erleichtern, können Sie beide Versionen im Vollbildmodus in einem separaten Tab mit den folgenden Links öffnen:

- {{ LiveSampleLink("text-scale", "Beispiel mit <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}
- {{ LiveSampleLink("no-text-scale", "Beispiel ohne <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}

### Ein Textskalierungs-responsives Layout

Dieses Beispiel demonstriert, dass mit `<meta name="text-scale">`, angewendet auf eine Seite, schriftbezogene Größen innerhalb von {{cssxref("@media")}} Abfragen verwendet werden können, um mobile Browser dazu zu bringen, automatisch Breakpoints anzupassen, wenn die OS-Schriftgröße geändert wird.

#### HTML

Wie im vorherigen Beispiel enthält unser Markup wieder die `<meta name="text-scale">` und `<meta name="viewport">` Elemente im `<head>`. In diesem Demo enthält der Body-Inhalt zwei Elemente — {{htmlelement("main")}} und {{htmlelement("aside")}} — zur Repräsentation einer Hauptinhaltsspalte und einer Seitenleiste.

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>Main content</main>
    <aside>Aside content</aside>
  </body>
</html>
```

#### CSS

Standardmäßig werden der Hauptinhalt und die Seitenleiste untereinander angeordnet. Wir fügen eine {{cssxref("@media")}} Abfrage hinzu, die die Elemente nebeneinander legt, wenn der Viewport breiter als `35rem` wird, mithilfe von [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout).

```css hidden live-sample___text-scale-layout
body {
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}
```

```css live-sample___text-scale-layout
@media (width > 35rem) {
  body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### Ergebnis

{{embedlivesample("text-scale-layout", "100%", "200")}}

Testen Sie dies in einem mobilen Browser. Sie werden sehen, dass, wenn die OS-Schriftgröße erhöht wird, die Breakpoint-Größe proportional dazu zunimmt. Bei größeren OS Schriftgrößen werden der Hauptinhalt und die Seitenleiste übereinander erscheinen, während sie vorher nebeneinander erschienen sind. Möglicherweise müssen Sie dies im Querformat betrachten, um den Effekt zu sehen.

Sie können das Demo in einem separaten Tab mit dem folgenden Link öffnen, um das Testen zu erleichtern:

{{ LiveSampleLink("text-scale-layout", "Beispiel eines responsiven Layouts") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Unterstützung für WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) auf chromium.googlesource.com (2026)
