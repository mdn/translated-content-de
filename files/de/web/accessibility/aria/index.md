---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Attributes), die Wege definieren, wie Webinhalte und Webanwendungen (insbesondere solche, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher gemacht werden können.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an unterstützende Technologien übergeben werden können, wenn es anderweitig keinen Mechanismus gibt. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten das richtige semantische HTML-Element bevorzugen, anstatt ARIA zu verwenden**, wenn ein solches Element existiert. Beispielsweise haben native Elemente eingebaute [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie sich jedoch entscheiden, ARIA zu verwenden, sind Sie dafür verantwortlich, das äquivalente Browserverhalten im Skript nachzuahmen.

[Die erste Regel der ARIA](https://www.w3.org/TR/using-aria/#rule1)-Verwendung lautet: "Wenn Sie ein natives HTML-Element oder Attribut mit den benötigten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element neu zu verwenden und ihm eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAims Umfrage zu über einer Million Startseiten](https://webaim.org/projects/million/#aria) fanden sie heraus, dass Startseiten mit vorhandener ARIA durchschnittlich 41 % mehr erkennbare Fehler aufwiesen als solche ohne ARIA. Während ARIA darauf ausgelegt ist, Webseiten zugänglicher zu machen, kann es, wenn es falsch verwendet wird, mehr Schaden als Nutzen verursachen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken wird mit einem {{HTMLElement("div")}} gebaut, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) den Browser, dass dieses Element tatsächlich ein JavaScript-gesteuertes Fortschrittsbalken-Widget ist. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) geben die Mindest- und Höchstwerte für den Fortschrittsbalken an, und das Attribut [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) beschreibt den aktuellen Zustand davon und muss daher mit JavaScript aktualisiert werden.

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

Alle Inhalte, die Benutzern von nicht-unterstützenden Technologien zur Verfügung stehen, müssen auch unterstützenden Technologien zugänglich gemacht werden. Ebenso sollten keine Funktionen eingeführt werden, die nur für Benutzer von unterstützenden Technologien zugänglich sind, die nicht auch für diejenigen ohne unterstützende Technologien zugänglich sind. Der oben beschriebene Fortschrittsbalken muss gestylt werden, um wie ein Fortschrittsbalken auszusehen.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht erlaubt; sein Mindestwert ist immer `0`.

> [!NOTE]
> HTML-Landmark-Elemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} usw.) haben eingebaute implizite ARIA-Rollen, sodass es nicht notwendig ist, diese zu duplizieren.

## Unterstützung

Wie jede andere Webtechnologie gibt es unterschiedliche Unterstützung für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser sowie der Art der Schnittstellentechnologie ab, die damit interagiert. Darüber hinaus sind die Versionen des Betriebssystems, des Browsers und der unterstützenden Technologie entscheidende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, haben nur teilweise Unterstützung oder melden ihre Funktionalität falsch.

Es ist auch wichtig zu beachten, dass einige Menschen, die auf unterstützende Technologien angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit zu verlieren, mit ihrem Computer und Browser zu interagieren. Aus diesem Grund ist es wichtig, [semantische HTML-Elemente zu verwenden](/de/docs/Learn/Accessibility/HTML), wann immer möglich, da semantisches HTML eine weitaus bessere Unterstützung für unterstützende Technologien bietet.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlichen unterstützenden Technologien zu testen. Dies liegt daran, dass Browser-Emulatoren und Simulatoren nicht wirklich effektiv sind, um die volle Unterstützung zu testen. Ebenso sind Proxy-Lösungen für unterstützende Technologien nicht ausreichend, um die volle Funktionalität zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Referenzseiten, die alle auf MDN diskutierten WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Referenzseiten, die alle auf MDN diskutierten WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Authoring-Praktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best-Practice-Dokumente, wie man am besten gängige Widgets und Interaktionen mit ARIA versieht. Eine ausgezeichnete Ressource.

## ARIA für gescriptete Widgets

- [Schreiben von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. haben eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA 'fälschen', müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live-Regionen geben Bildschirmlesern Vorschläge, wie Änderungen am Inhalt einer Seite behandelt werden sollen.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, um ARIA zu verstehen:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
