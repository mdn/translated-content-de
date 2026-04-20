---
title: "`prefers-reduced-motion` CSS-Media-Feature"
short-title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite hat eine skalierende Bewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`** [CSS]-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht notwendiger Bewegung zu minimieren. Die Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät bekannt gegeben hat. Dieser Schlüsselwortwert wird als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegungen aktiviert hat. Der `reduce`-Schlüsselwortwert wird als wahr ausgewertet; daher ist `@media (prefers-reduced-motion)` gleichwertig mit `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anfrage beachtet, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.
  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein (oder Erscheinungsbild, je nach Version) > Animationen sind ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.
  - Zusätzlich versuchen Sie `gsettings set org.gnome.desktop.interface enable-animations false` auszuführen, um Firefox (und andere Programme, die auf GTK Version 4 basieren) dazu zu bringen, die `reduce`-Einstellung zu respektieren.

- In Plasma/KDE: Systemeinstellungen > Arbeitsflächenverhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" gestellt.
  - Alternativ fügen Sie `AnimationDurationFactor=0` dem `[KDE]`-Block von `~/.config/kdeglobals` hinzu.
  - Oder führen Sie einfach `kwriteconfig6 --key AnimationDurationFactor 0` in Ihrem Terminal aus.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine numerische Einstellung namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert auf entweder `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Einstellung werden sofort wirksam.

## Beispiele

Dieses Beispiel nutzt eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Bewegungsreduzierung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion`-Media-Query Ihre Präferenz und der CSS-Code innerhalb der Regeln zur Bewegungsreduzierung, der die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufweist, aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) kommt, wird Vorrang haben. Dadurch wird die [Animation](/de/docs/Web/CSS/Guides/Animations/Using) am Kasten zur `dissolve`-Animation abgeschwächt, die eine weniger aufdringliche Animation ist und keinen vestibulären Bewegungsauslöser darstellt.

### Abschwächung der Skalierungsanimation

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
  color: white;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Toning down the animation scaling")}}

Sie können die Einstellung zur Bewegungsreduzierung auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Skalierungsanimation zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf die Aktivierung oder Deaktivierung der Einstellung umschaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Medienanfrage für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf dem WebKit-Blog (2017)
