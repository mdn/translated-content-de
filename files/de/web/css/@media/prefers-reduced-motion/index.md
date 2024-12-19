---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite hat eine skalierende Bewegung, die für einige Leser problematisch sein kann. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um unnötige Bewegungen zu minimieren. Diese Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die Bewegungsanimationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unwohlsein auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät bekannt gegeben hat. Dieser Schlüsselwortwert wird als "false" ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung zur Reduzierung von Bewegungen auf seinem Gerät aktiviert hat. Dieser Schlüsselwortwert wird als "true" ausgewertet.

## Benutzereinstellungen

Für Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist aktiviert.

  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein (oder Aussehen, je nach Version) > Animationen ist deaktiviert.
  - Alternativ `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3 Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzufügen.

- In Plasma/KDE: Systemeinstellungen > Arbeitsflächenverhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Eingabehilfen > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Eingabehilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Eingabehilfen > Bewegung.
- In Android 9+: Einstellungen > Eingabehilfen > Animationen entfernen.
- In Firefox `about:config`: Eine Zahlenpräferenz namens `ui.prefersReducedMotion` hinzufügen und deren Wert entweder auf `0` für volle Animation oder auf `1` setzen, um eine Präferenz für reduzierte Bewegungen anzuzeigen. Änderungen an dieser Präferenz werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion` Media Query Ihre Präferenz und die CSS-Regeln mit derselben [Spezifität](/de/docs/Web/CSS/Specificity), aber mit späterer Reihenfolge in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), werden den Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten auf die `dissolve`-Animation gedämpft, die eine weniger ausgeprägte Animation ist, die kein vestibulärer Bewegungsauslöser ist.

### Dämpfung der Skalierungsanimation

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzereinstellungen) aktivieren, um die Änderung in der Skalierungsanimation zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf das Aktivieren oder Deaktivieren der Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Eine Einführung in die reduzierte Bewegungsabfrage](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit-Blog (2017)
