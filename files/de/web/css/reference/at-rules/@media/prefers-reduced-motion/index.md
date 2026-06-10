---
title: "`prefers-reduced-motion` CSS-Medienfunktion"
short-title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
l10n:
  sourceCommit: 2d5e55258ef3f001d0d9fea6b48486bd3056fca6
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein kann. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung der Bewegung auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlicher Bewegung zu minimieren. Die Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Bedeutet, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Bedeutet, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegung aktiviert hat. Der `reduce`-Schlüsselwortwert wird als wahr bewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Benutzereinstellungen

Verwenden Sie die folgenden Einstellungen, um die `reduce`-Anforderung zu respektieren:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > "Reduzierte Animation" einschalten.
  - In älteren Versionen von GNOME: GNOME Tweaks > Allgemeiner Tab (oder Erscheinungsbild, je nach Version) > Animationen werden ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.
  - Zusätzlich versuchen Sie, `gsettings set org.gnome.desktop.interface enable-animations false` auszuführen, um Firefox (und andere Programme, die auf GTK Version 4 basieren) die `reduce`-Einstellung respektieren zu lassen.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten > Allgemeines Verhalten > "Animationsgeschwindigkeit" auf "Sofort" stellen.
  - Alternativ fügen Sie `AnimationDurationFactor=0` zum `[KDE]`-Block von `~/.config/kdeglobals` hinzu.
  - Oder führen Sie einfach `kwriteconfig6 --key AnimationDurationFactor 0` in Ihrem Terminal aus.
- In Windows 10: Einstellungen > Erleichterter Zugriff > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte.
- In macOS bis 15 (Sequoia): Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In macOS 25 (Tahoe) und später: Systemeinstellungen > Bedienungshilfen > Bewegung > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine numerische Einstellung namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Einstellung werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung der Bewegung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion` Medienabfrage Ihre Präferenz, und das CSS innerhalb der reduzierten Bewegungsregeln, mit derselben [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aber später in der [CSS-Quellenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Dadurch wird die [Animation](/de/docs/Web/CSS/Guides/Animations/Using) auf dem Kasten in die `dissolve` Animation abgeschwächt, die eine gedämpftere Animation ist, die kein Auslöser für vestibuläre Bewegungen ist.

### Abschwächung der Animation beim Skalieren

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

Sie können die Einstellung zur Reduzierung der Bewegung auf [Ihrem Gerät](#benutzereinstellungen) aktivieren, um die Änderung der Animationsskalierung zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation wechselt, je nachdem, ob die Einstellung aktiviert oder deaktiviert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Medienabfrage zur Reduzierung von Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
