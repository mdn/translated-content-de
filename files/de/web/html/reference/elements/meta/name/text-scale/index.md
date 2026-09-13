---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{SeeCompatTable}}

Der **`text-scale`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements ermöglicht es, dass die Seite in den anfänglichen {{cssxref("font-size")}}-Maßstab des {{htmlelement("html")}}-Root-Elements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers eintritt.

> [!WARNING]
> Wenn Sie `<meta name="text-scale" content="scale" />` auf Ihrer Website einfügen, um dieses Verhalten der Textskalierung zu aktivieren, müssen Sie sicherstellen, dass die Unterstützung von Textgrößen bis zum maximalen Textskalierungsfaktor für Ihre Zielplattformen gegeben ist. Dies reicht typischerweise von 200 % bis über 300 % auf mobilen Plattformen, wobei einige Barrierefreiheitsfunktionen sogar noch größere Textskalierungen ermöglichen. Stellen Sie sicher, dass Ihre Website nicht fehlerhaft aussieht, wenn Nutzer größere oder kleinere Schriftgrößeinstellungen im Betriebssystem vornehmen.

## Verwendungshinweise

Ein `<meta name="text-scale">`-Element hat folgende zusätzliche Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Gibt das Verhalten der {{cssxref("font-size")}}-Skalierung an.
    Sein Wert ist ein Schlüsselwort, das eines der folgenden sein kann:
    - `scale`
      - : Optiert die Seite, indem das anfängliche {{cssxref("font-size")}}-Verhältnis des {{htmlelement("html")}}-Root-Elements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers skaliert wird. Es führt auch dazu, dass der Browser bestehende browserbasierte Mechanismen und Heuristiken deaktiviert (z. B. automatische Textgrößenanpassung auf mobilen Geräten).
    - `legacy`
      - : Der Standardwert. Die Seite wird nicht in die Skalierung der `font-size` des Root-Elements im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems und Browsers eingebunden. Dies hat denselben Effekt wie das völlige Weglassen des `<meta>`-Elements (Betriebssystem-Schriftvoreinstellungen werden ignoriert).

## Beschreibung

Das `<meta name="text-scale" content="scale" />`-Element kann in den {{htmlelement("head")}} eines Dokuments eingefügt werden, um dem Browser zu signalisieren, dass die Seite in einer Weise skaliert ist, die über verschiedene vom Nutzer ausgewählte Schriftgrößeneinstellungen hinweg gut dargestellt wird; es deaktiviert auch bestehende browserbasierte Mechanismen und Heuristiken.

Insbesondere definiert es den Wert der anfänglichen `font-size` des {{htmlelement("html")}}-Root-Elements, um proportional zu benutzerdefinierten Betriebssystem- und Browserschriftgrößeneinstellungen zu skalieren. Der {{cssxref("initial")}}-Wert der Root-{{cssxref("font-size")}} ist `medium`, was den Wert der [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem)-Einheit definiert. Vorausgesetzt, Sie setzen oder erlauben die Voreinstellung der `font-size` des Root-Elements auf eine [lokale oder root-schriftverwandte `<Länge>`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) Einheit, wird jedes nachfolgende Schlüsselwort (wie `medium`) oder jede schriftverwandte Länge (wie `em` und `rem`) proportional zu den Betriebssystem- oder Browserschriftgrößeneinstellungen skaliert.

Zum Beispiel führt die Aufnahme von `<meta name="text-scale" content="scale">` auf der Seite dazu, dass die folgende Regel:

```css
p {
  font-size: medium;
}
```

dazu führt, dass alle {{htmlelement("p")}}-Elemente eine skalierte Schriftgröße erhalten. Sie könnten auch `font-size` auf `initial` setzen, um denselben Effekt zu erzielen.

Auf mobilen Plattformen ist dies standardmäßig nicht der Fall. `<meta name="text-scale" content="scale" />` aktiviert diese Skalierung. Auf Desktop-Plattformen bewirkt es, dass die [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale) Umgebung eine Zahl widergibt, die dem Multiplikator entspricht, der auf Browserschriftgrößeinstellungen basiert, aber sonst hat es keinen erkennbaren Vorteil.

### Zusammenfassung der Verwendung

Zusammengefasst, setzen Sie `scale` nur, wenn Ihre Anwendung so gestaltet ist, dass sie die Schriftgrößenanpassung unterstützt. Empfohlene Verwendung:

1. Fügen Sie `<meta name="text-scale" content="scale" />` im `<head>` Ihrer Seite ein.
2. Überschreiben Sie nicht die anfängliche {{cssxref(":root")}} `font-size` mit einem [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) (wie `16px`).
3. Verwenden Sie nur [schriftverwandte Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) wie `em`/`rem` oder Schlüsselwörter wie `small`, `x-large` usw., um Inhalte zu dimensionieren.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

Die Verwendung von `<meta name="text-scale" />`, um Dimensionen im Verhältnis zu den Textskalierungseinstellungen des Betriebssystems zu dimensionieren, wird gegenüber der [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale) Umgebung empfohlen. Sie haben auf mobilen Geräten einen ähnlichen Effekt, aber `<meta>` bietet auch Verbesserungen für Desktop-Browser (und ist einfacher zu verwenden).

Vermeiden Sie die gleichzeitige Verwendung beider Funktionen, da die Textskalierung möglicherweise zweimal angewandt wird, wodurch kleine schriftverwandte Dimensionen kleiner und große schriftverwandte Dimensionen größer werden.

## Beispiele

### Meta-Viewport-Textskalierungs-Demonstration

Dieses Beispiel zeigt die Wirkung von `<meta name="text-scale" content="scale">`.

#### HTML

Wir fügen das `<meta name="text-scale" content="scale">`-Element im `<head>` des Dokuments ein, sowie ein [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Element, um eine korrekte Anzeige auf mobilen Geräten zu gewährleisten. Wir platzieren auch einige Textinhalte in {{htmlelement("p")}}-Elemente mit verschiedenen `class`-Attributen, die es uns erlauben, sie mit unterschiedlichen Stilen anzusprechen.

```html live-sample___text-scale
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width" />
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
    <meta name="viewport" content="width=device-width" />
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

Textcontainer mit einer `class` von `text-scale` erhalten eine {{cssxref("font-size")}} von `1rem`, was bedeutet, dass in Browsern, die `<meta name="text-scale" content="scale">` unterstützen, dieser Text skaliert wird, wenn die OS/Browser-Schriftgrößeneinstellungen geändert werden. Textcontainer mit einer `class` von `fixed` erhalten eine `font-size` von `20px`, was bedeutet, dass dieser Text in einer festen Größe bleibt, wenn die OS/Browser-Schriftgrößeneinstellungen geändert werden.

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Ergebnis

Diese Version enthält das `<meta name="text-scale">`-Element:

{{embedlivesample("text-scale", "100%", "200")}}

Diese Version enthält NICHT das `<meta name="text-scale">`-Element:

{{embedlivesample("no-text-scale", "100%", "200")}}

Testen Sie diese Beispiele in einem mobilen Browser. Ändern Sie die bevorzugte Schriftgröße in den Anzeige- oder Barrierefreiheitseinstellungen des mobilen Geräts. Beachten Sie, wie im ersten Beispiel, wenn `<meta name="text-scale">` enthalten ist, die Ober- und Unterzeilen des Textes proportional zu den OS-Einstellungen skalieren, während die mittlere Zeile, deren `font-size` mit absoluten Einheiten gesetzt ist, nicht ihre Größe ändert. Ohne das `<meta name="text-scale">`-Element wird der Text nicht proportional zu den OS-Einstellungen skaliert.

Um das Testen zu erleichtern, können Sie beide Versionen in einem separaten Tab im Vollbildmodus mit den untenstehenden Links öffnen:

- {{ LiveSampleLink("text-scale", "Beispiel mit <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}
- {{ LiveSampleLink("no-text-scale", "Beispiel ohne <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}

### Ein textskalierungsresponsives Layout

Dieses Beispiel zeigt, dass mit `<meta name="text-scale">` auf einer Seite, schriftverwandte Größen innerhalb von {{cssxref("@media")}} Abfragen verwendet werden können, um mobile Browser automatisch Breakpoints anpassen zu lassen, wenn die OS-Schriftgröße geändert wird.

#### HTML

Wie im vorherigen Beispiel enthält unser Markup wieder die `<meta name="text-scale">` und `<meta name="viewport">` Elemente im `<head>`. In diesem Demo enthalten die Hauptinhalte zwei Elemente — {{htmlelement("main")}} und {{htmlelement("aside")}} — um eine Hauptinhaltsspalte und eine Seitenleiste darzustellen.

```html live-sample___text-scale-layout
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <main>Main content</main>
    <aside>Aside content</aside>
  </body>
</html>
```

#### CSS

Standardmäßig werden der Hauptinhalt und die Seitenleiste untereinander angeordnet. Wir fügen eine {{cssxref("@media")}} Abfrage ein, die die Elemente nebeneinander mit [CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout) anordnet, wenn der Viewport breiter als `35rem` wird.

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

Testen Sie dies in einem mobilen Browser. Sie werden sehen, dass bei Erhöhung der OS-Schriftgröße die Größe des Breakpoints proportional erhöht wird. Bei größeren Schriftgrößen des Betriebssystems erscheinen der Hauptinhalt und die Seite übereinander, während sie vorher nebeneinander erschienen. Sie müssen es möglicherweise in der horizontalen Ausrichtung ansehen, um den Effekt zu sehen.

Sie können das Demo in einem separaten Tab mit dem untenstehenden Link zum einfacheren Testen öffnen:

{{ LiveSampleLink("text-scale-layout", "Responsives Layout-Beispiel") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Unterstützung für WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) auf chromium.googlesource.com (2026)
