---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die Möglichkeiten definieren, Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, unterstützenden Technologien übermittelt werden können, wenn es ansonsten keinen Mechanismus gibt. Beispielsweise ermöglicht ARIA zugängliche JavaScript-Widgets, Formulareingabehinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten das korrekte semantische HTML-Element dem Einsatz von ARIA vorziehen**, wenn ein solches Element existiert. Beispielsweise haben native Elemente integrierte [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie jedoch ARIA verwenden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten im Skript nachzuahmen.

[Die erste Regel der ARIA-Nutzung](https://www.w3.org/TR/using-aria/#rule1) lautet: "Wenn Sie ein natives HTML-Element oder Attribut verwenden können, das die benötigte Semantik und das gewünschte Verhalten bereits integriert hat, anstatt ein Element umzuwidmen und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAims Umfrage von über einer Million Homepages](https://webaim.org/projects/million/#aria) wurde festgestellt, dass Homepages mit vorhandener ARIA durchschnittlich 41% mehr erkannte Fehler hatten als solche ohne ARIA. Während ARIA dazu gedacht ist, Webseiten zugänglicher zu machen, kann es bei falscher Anwendung mehr schaden als nützen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) geben die minimalen und maximalen Werte für den Fortschrittsbalken an, und das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) beschreibt den aktuellen Zustand und muss daher mit JavaScript aktualisiert werden.

Zusätzlich zur direkten Platzierung im Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

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

Alle Inhalte, die für Nutzer nicht unterstützender Technologien verfügbar sind, müssen auch für unterstützende Technologien verfügbar gemacht werden. Ebenso sollten keine Funktionen enthalten sein, die nur für Benutzer unterstützender Technologien zugänglich sind und nicht für diejenigen, die keine unterstützenden Technologien nutzen. Der oben erwähnte Fortschrittsbalken muss gestylt werden, um wie ein Fortschrittsbalken auszusehen.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht erlaubt; sein Minimalwert ist immer `0`.

> [!NOTE]
> HTML-Navigationselemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) haben eingebaute implizite ARIA-Rollen, sodass diese nicht dupliziert werden müssen.

## Unterstützung

Wie jede andere Webtechnologie gibt es verschiedene Unterstützungsgrade für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser ab sowie von der Art der unterstützenden Technologie, die damit verbunden ist. Darüber hinaus sind die Version des Betriebssystems, des Browsers und der unterstützenden Technologie beitragende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder berichten fehlerhaft über deren Funktionalität.

Es ist auch wichtig anzuerkennen, dass einige Menschen, die auf unterstützende Technologien angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML), wann immer möglich, da semantisches HTML weitaus besser für unterstützende Technologien geeignet ist.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlicher unterstützender Technologie zu testen. Das liegt daran, dass Browser-Emulatoren und -Simulatoren nicht wirklich effektiv für die Prüfung umfassender Unterstützung sind. Ebenso sind Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Referenzseiten, die alle auf MDN behandelten WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Referenzseiten, die alle auf MDN behandelten WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Authoring-Praktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente zeigen, wie man am besten gängige Widgets und Interaktionen mit ARIA versieht. Eine ausgezeichnete Ressource.

## ARIA für geskriptete Widgets

- [Erstellung von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}}, etc. haben eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA 'fälschen', müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
  - : Live-Bereiche geben Bildschirmlesern Anregungen, wie Änderungen an den Inhalten einer Seite behandelt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
