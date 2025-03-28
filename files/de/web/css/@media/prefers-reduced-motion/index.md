---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen möchten möglicherweise die Funktion zur Bewegungsreduzierung auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlicher Bewegung zu minimieren. Die Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die Animationen, die auf Bewegung basieren, entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Verschieben großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät bekannt gegeben hat. Dieser Schlüsselwortwert wird als false bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegung aktiviert hat. Dieser Schlüsselwortwert wird als true bewertet.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung erfüllt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation aktiviert ist.

  - In älteren Versionen von GNOME: GNOME Tweaks > Allgemein-Tab (oder Darstellung, je nach Version) > Animationen ist deaktiviert.
  - Alternativ fügen Sie `gtk-enable-animations = false` dem `[Settings]` Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsplatzverhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" wird ganz nach rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Anzeigeeffekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine numerische Präferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzugeben. Änderungen an dieser Präferenz werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Bewegungsreduzierung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die Medienabfrage `prefers-reduced-motion` Ihre Präferenz und der CSS-Inhalt innerhalb der Regeln zur Bewegungsreduktion, mit derselben [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Dadurch wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten auf die `dissolve`-Animation, eine weniger intensive Animation, die kein vestibulärer Bewegungsauslöser ist, abgestimmt.

### Die Animation skalieren reduzieren

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
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
  color: #fff;
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

Sie können die Einstellung zur Bewegungsreduzierung auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung in der Animation zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation wechselt, wenn die Einstellung aktiviert oder deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Einführung in die reduzierte Bewegungsmedienabfrage](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf WebKit Blog (2017)
