---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{SeeCompatTable}}

Der Wert **`text-scale`** für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements ermöglicht es, die Seite so einzustellen, dass das anfängliche {{cssxref("font-size")}} des {{htmlelement("html")}}-Root-Elements im Verhältnis zu den Betriebssystem- und Browser-Einstellungen skaliert wird.

> [!WARNING]
> Wenn Sie `<meta name="text-scale" content="scale" />` auf Ihrer Website einbinden, um dieses Textskalierungsverhalten zu aktivieren, müssen Sie sicherstellen, dass es Textgrößen bis zum maximalen Skalierungsfaktor für Ihre Zielplattformen unterstützt. Dies reicht typischerweise von 200 % bis über 300 % auf mobilen Plattformen, wobei einige Barrierefreiheitsfunktionen noch größere Textskalierungen ermöglichen. Stellen Sie sicher, dass Ihre Website für Benutzer, die größere oder kleinere Schriftgrößeneinstellungen verwenden, nicht fehlerhaft aussieht.

## Nutzungshinweise

Ein `<meta name="text-scale">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Gibt das {{cssxref("font-size")}}-Opt-In-Verhalten an.
    Sein Wert ist ein Schlüsselwort, das eines der folgenden sein kann:
    - `scale`
      - : Aktiviert die Seite für die anfängliche Skalierung des {{htmlelement("html")}}-Root-Elements im Verhältnis zu Betriebssystem- und Browser-Einstellungen. Es bewirkt auch, dass der Browser bestehende browserbasierte Mechanismen und Heuristiken (z. B. automatische Textgrößenänderung auf Mobilgeräten) deaktiviert.
    - `legacy`
      - : Der Standardwert. Die Seite ist nicht für die Skalierung des `font-size` des Root-Elements im Verhältnis zu Betriebssystem- und Browser-Einstellungen aktiviert. Dies hat den gleichen Effekt wie das Nicht-Einschließen des `<meta>`-Elements (Betriebssystem-Schriftvoreinstellungen werden ignoriert).

## Beschreibung

Das Element `<meta name="text-scale" content="scale" />` kann in das {{htmlelement("head")}} eines Dokuments aufgenommen werden, um dem Browser zu signalisieren, dass die Seite so dimensioniert ist, dass sie gut mit verschiedenen vom Benutzer ausgewählten Schriftgrößenvoreinstellungen skaliert. Gleichzeitig werden bestehende browserbasierte Mechanismen und Heuristiken deaktiviert.

Es legt speziell fest, dass der anfängliche Wert des {{htmlelement("html")}}-Root-Elements `font-size` im Verhältnis zu benutzerdefinierten Betriebssystem- und Browsereinstellungen skaliert wird. Der {{cssxref("initial")}} Wert des Root-{{cssxref("font-size")}} ist `medium`, was den Wert der [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem)-Einheit definiert. Vorausgesetzt, Sie setzen oder lassen zu, dass das Root-`font-size` standardmäßig auf eine [lokale oder root-schriftverhältnis `<length>`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths)-Einheit eingestellt ist, werden nachfolgende Schlüsselwörter (wie `medium`) oder schriftverhältnismäßige Längen (wie `em` und `rem`) im Verhältnis zu Betriebssystem- oder Browserschriftgrößeneinstellungen skaliert.

Zum Beispiel würde die folgende Regel, wenn `<meta name="text-scale" content="scale">` auf der Seite eingefügt ist:

```css
p {
  font-size: medium;
}
```

dazu führen, dass alle {{htmlelement("p")}}-Elemente eine skalierte Schriftgröße erhalten. Sie könnten auch `font-size` auf `initial` setzen, um den gleichen Effekt zu erzielen.

Auf mobilen Plattformen ist dies standardmäßig nicht der Fall. `<meta name="text-scale" content="scale" />` aktiviert diese Skalierung. Auf Desktop-Plattformen hat dies zur Folge, dass die [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)-Umgebungsvariable auf den Multiplikator abgestimmt wird, der den Browserschriftgrößeneinstellungen entspricht, aber ansonsten keinen erkennbaren Vorteil.

### Zusammenfassung der Nutzung

Zusammenfassend sollten Sie `scale` nur setzen, wenn Ihre App darauf ausgelegt ist, Schriftgrößenanpassung zu unterstützen. Die empfohlene Nutzung ist:

1. Fügen Sie `<meta name="text-scale" content="scale" />` in den `<head>` Ihrer Seite ein.
2. Überschreiben Sie nicht die anfängliche {{cssxref(":root")}} `font-size` mit einem [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) (wie `16px`).
3. Verwenden Sie nur [schriftverhältnismäßige Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) wie `em`/`rem` oder Schlüsselwörter wie `small`, `x-large` usw., um den Inhalt zu skalieren.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

Die Verwendung von `<meta name="text-scale" />`, um Dimensionen relativ zu Betriebssystem-Textskalierungseinstellungen zu setzen, wird gegenüber der [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)-Umgebungsvariable empfohlen. Sie haben ähnliche Effekte auf Mobilgeräten, aber `<meta>` liefert auch Verbesserungen für Desktop-Browser (und ist einfacher zu verwenden).

Vermeiden Sie es, beide Funktionen gleichzeitig zu verwenden, da die Textskalierung zweimal angewendet werden könnte, und kleine schriftverhältnismäßige Dimensionen kleiner und große schriftverhältnismäßige Dimensionen größer machen könnte.

## Beispiele

### Demonstration der Meta-Viewport-Textskalierung

Dieses Beispiel demonstriert die Wirkung von `<meta name="text-scale" content="scale">`.

#### HTML

Wir nehmen das `<meta name="text-scale" content="scale">`-Element in den `<head>` des Dokuments auf, sowie ein [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Element, um eine korrekte Anzeige auf mobilen Geräten sicherzustellen. Wir fügen auch einigen Textinhalt in {{htmlelement("p")}}-Elementen mit verschiedenen `class`-Attributen hinzu, um sie mit unterschiedlichen Stilen ansprechen zu können.

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

Textcontainer mit einer `class` von `text-scale` erhalten eine {{cssxref("font-size")}} von `1rem`, was bedeutet, dass in Browsern, die `<meta name="text-scale" content="scale">` unterstützen, dieser Text skaliert, wenn die Betriebssystem-/Browserschriftvoreinstellungen geändert werden. Textcontainer mit einer `class` von `fixed` erhalten eine `font-size` von `20px`, was bedeutet, dass dieser Text unabhängig von Änderungen der Betriebssystem-/Browser-Schriftvoreinstellungen eine feste Größe behält.

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

Diese Version enthält das `<meta name="text-scale">`-Element NICHT:

{{embedlivesample("no-text-scale", "100%", "200")}}

Testen Sie diese Beispiele in einem mobilen Browser. Ändern Sie die bevorzugte Schriftgröße in den Anzeige- oder Barrierefreiheitseinstellungen des Mobilgeräts. Beachten Sie, wie im ersten Beispiel, wenn `<meta name="text-scale">` enthalten ist, die oberen und unteren Textzeilen proportional zu den Betriebssystemeinstellungen skaliert werden, während die mittlere Zeile, mit `font-size` in absoluten Einheiten, nicht in der Größe verändert wird. Ohne das `<meta name="text-scale">`-Element skaliert der Text nicht proportional zu den Betriebssystemeinstellungen.

Um das Testen zu erleichtern, können Sie beide Versionen im Vollbildmodus in einem separaten Tab mit den unten stehenden Links öffnen:

- {{ LiveSampleLink("text-scale", "Beispiel mit <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}
- {{ LiveSampleLink("no-text-scale", "Beispiel ohne <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}

### Ein textskalierungssensibles Layout

Dieses Beispiel zeigt, dass mit `<meta name="text-scale">` auf einer Seite schriftverhältnismäßige Größen in {{cssxref("@media")}}-Abfragen verwendet werden können, um mobile Browser dazu zu bringen, Breakpoints automatisch anzupassen, wenn die OS-Schriftgröße geändert wird.

#### HTML

Wie im vorherigen Beispiel enthält unser Markup wieder die `<meta name="text-scale">` und `<meta name="viewport">`-Elemente im `<head>`. In diesem Demo enthält der Body-Inhalt zwei Elemente — {{htmlelement("main")}} und {{htmlelement("aside")}} — zur Darstellung einer Hauptinhaltsspalte und einer Seitenleiste.

```html live-sample___text-scale-layout
<!doctype html>
<html lang="en-US">
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

Standardmäßig sind der Hauptinhalt und die Seitenleiste übereinander angeordnet. Wir fügen eine {{cssxref("@media")}}-Abfrage ein, die die Elemente nebeneinander anordnet, wenn der Viewport breiter als `35rem` wird.

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

Testen Sie dies in einem mobilen Browser. Sie werden sehen, dass, wenn die OS-Schriftgröße erhöht wird, die Breakpoint-Größe proportional dazu zunimmt. Bei größeren OS-Schriftgrößen erscheinen der Haupt- und Nebeninhalt übereinander, während sie zuvor nebeneinander dargestellt wurden. Sie müssen möglicherweise im Querformat schauen, um den Effekt zu sehen.

Sie können die Demo in einem separaten Tab mit dem unten stehenden Link öffnen, um das Testen zu erleichtern:

{{ LiveSampleLink("text-scale-layout", "Beispiel für ein responsives Layout") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Support für WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) auf chromium.googlesource.com (2026)
