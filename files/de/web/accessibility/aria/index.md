---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: d8fd9326867083bc2ce88d1128aba888ad5312fd
---

{{AccessibilitySidebar}}

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an unterstützende Technologien übergeben werden können, wenn es sonst keinen Mechanismus gibt. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten, wenn ein solches Element existiert, das korrekte semantische HTML-Element der Verwendung von ARIA vorziehen**. Natürliche Elemente besitzen bereits integrierte [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich dennoch für die Verwendung von ARIA entscheiden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten im Skript nachzubilden.

[Die erste Regel der ARIA](https://www.w3.org/TR/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder Attribut mit den Semantiken und dem Verhalten, die Sie benötigen, bereits verwenden können, anstatt ein Element umzuwidmen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAims Untersuchung von über einer Million Startseiten](https://webaim.org/projects/million/#aria) wurde festgestellt, dass Startseiten mit vorhandener ARIA im Durchschnitt 41% mehr festgestellte Fehler aufwiesen als jene ohne ARIA. Obwohl ARIA dafür konzipiert ist, Webseiten zugänglicher zu machen, kann es, wenn es falsch verwendet wird, mehr schaden als nutzen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken ist mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung zu verleihen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) den Browser darüber, dass dieses Element tatsächlich ein JavaScript-basiertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) spezifizieren die minimalen und maximalen Werte des Fortschrittsbalkens, und das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) beschreibt den aktuellen Zustand und muss daher mit JavaScript aktualisiert werden.

Zusätzlich zur direkten Platzierung im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mithilfe von JavaScript-Code wie diesem aktualisiert werden:

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

Alle Inhalte, die für Benutzer ohne unterstützende Technologien verfügbar sind, müssen auch für unterstützende Technologien zugänglich gemacht werden. Ebenso sollten keine Funktionen ausschließlich für Benutzer von unterstützenden Technologien enthalten sein, die nicht auch für diejenigen zugänglich sind, die keine unterstützenden Technologien nutzen. Der oben genannte Fortschrittsbalken muss gestylt werden, damit er wie ein Fortschrittsbalken aussieht.

Es wäre viel einfacher, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min` Attribut ist für das {{HTMLElement('progress')}}-Element nicht erlaubt; der Mindestwert ist immer `0`.

> [!NOTE]
> HTML-Landmark-Elemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) haben eingebaute implizite ARIA-Rollen, daher ist es nicht nötig, diese zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es unterschiedliche Grade der Unterstützung für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser sowie von der Art der unterstützenden Technologie, die damit interagiert, ab. Darüber hinaus tragen die Version des Betriebssystems, des Browsers und der unterstützenden Technologie dazu bei. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, bieten nur teilweise Unterstützung oder melden ihre Funktionalität falsch.

Es ist auch wichtig anzuerkennen, dass einige Menschen, die auf unterstützende Technologie angewiesen sind, zögerlich sind, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Daher ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn/Accessibility/HTML), wann immer möglich, da semantisches HTML eine weitaus bessere Unterstützung für unterstützende Technologien aufweist.

Es ist auch wichtig, Ihre erstellte ARIA mit tatsächlichen unterstützenden Technologien zu testen. Da Browser-Emulatoren und Simulatoren nicht wirklich effektiv sind, um die volle Unterstützung zu testen, sind auch Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die volle Funktionalität zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Referenzseiten, die alle auf MDN besprochenen WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Referenzseiten, die alle auf MDN besprochenen WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente, wie man am besten gängige Widgets und Interaktionen mit ARIA versieht. Eine ausgezeichnete Ressource.

## ARIA für geskriptete Widgets

- [Erstellung von tastatur-navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} etc. haben eine eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA 'nachahmen', müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live-Bereiche geben Sprachausgaben Lesegeräten Hinweise, wie sie Änderungen des Seiteninhalts handhaben sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
