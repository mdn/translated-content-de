---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Attributes), die Möglichkeiten definieren, Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an unterstützende Technologien übergeben werden können, wenn es keine andere Mechanismus gibt. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Content-Updates und vieles mehr.

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten das korrekte semantische HTML-Element anstelle von ARIA verwenden**, falls ein solches Element existiert. Beispielsweise haben native Elemente eingebaute [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich jedoch für die Verwendung von ARIA entscheiden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten im Skript nachzubilden.

[Die erste Regel der ARIA-Nutzung](https://www.w3.org/TR/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder Attribut mit den benötigten Semantiken und dem gewünschten Verhalten verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, tun Sie dies."

> [!NOTE]
> Ein Sprichwort lautet: "Keine ARIA ist besser als schlechte ARIA." In [WebAims Umfrage von über einer Million Startseiten](https://webaim.org/projects/million/#aria) fanden sie heraus, dass Startseiten mit ARIA durchschnittlich 41 % mehr erkannte Fehler hatten als solche ohne ARIA. Während ARIA dazu gedacht ist, Webseiten zugänglicher zu machen, kann es bei falscher Verwendung mehr schaden als nützen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Attribut den Browser, dass dieses Element tatsächlich ein JavaScript-gestütztes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) geben den minimalen und maximalen Wert für den Fortschrittsbalken an, und das [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) beschreibt den aktuellen Zustand und muss daher mit JavaScript aktualisiert werden.

Neben der direkten Platzierung im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

```js
// Find the progress bar <div> in the DOM.
const progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

Alle Inhalte, die für Nutzer ohne unterstützende Technologie verfügbar sind, müssen auch für unterstützende Technologien verfügbar gemacht werden. Ebenso sollten keine Funktionen enthalten sein, die auf Benutzer unterstützender Technologien abzielen, die nicht auch für diejenigen zugänglich sind, die keine solchen Technologien verwenden. Der oben gezeigte Fortschrittsbalken muss gestylt werden, damit er wie ein Fortschrittsbalken aussieht.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zulässig; sein Mindestwert ist immer `0`.

> [!NOTE]
> HTML-Kennzeichnungselemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} usw.) haben eingebaute implizite ARIA-Rollen, daher ist es nicht nötig, sie zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es unterschiedliche Grade der Unterstützung für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser sowie von der Art der unterstützenden Technologie ab, die damit interagiert. Darüber hinaus sind die Versionen des Betriebssystems, des Browsers und der unterstützenden Technologie entscheidende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder berichten die Funktionalität falsch.

Es ist auch wichtig anzuerkennen, dass einige Menschen, die auf unterstützende Technologien angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn/Accessibility/HTML), wann immer möglich, da semantisches HTML weitaus besser von unterstützenden Technologien unterstützt wird.

Es ist auch wichtig, Ihr geschriebenes ARIA mit tatsächlicher unterstützender Technologie zu testen. Dies liegt daran, dass Browser-Emulatoren und -Simulatoren für das Testen der vollständigen Unterstützung nicht wirklich effektiv sind. Ebenso sind Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die volle Funktionalität zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Referenzseiten, die alle auf MDN behandelten WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Referenzseiten, die alle auf MDN behandelten WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorpraktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente, wie man am besten gängige Widgets und Interaktionen ARIA-fiziert. Eine ausgezeichnete Ressource.

## ARIA für geskriptete Widgets

- [Erstellen von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. haben eine eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA 'nachahmen', müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live-Bereiche bieten Vorschläge für Screenreader, wie Änderungen am Inhalt einer Seite behandelt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
