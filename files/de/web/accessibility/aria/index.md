---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** ist eine Sammlung von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) und [Attributen](/de/docs/Web/Accessibility/ARIA/Attributes), die Möglichkeiten definieren, um Webinhalte und Webanwendungen (insbesondere jene, die mit JavaScript entwickelt wurden) für Menschen mit Behinderungen zugänglicher zu machen.

Es ergänzt HTML, sodass Interaktionen und Widgets, die häufig in Anwendungen verwendet werden, an assistive Technologien weitergegeben werden können, wenn es anderweitig keinen Mechanismus gibt. Zum Beispiel ermöglicht ARIA zugängliche JavaScript-Widgets, Formularhinweise und Fehlermeldungen, Live-Inhaltsaktualisierungen und mehr.

> [!WARNING]
> Viele dieser Widgets werden in modernen Browsern vollständig unterstützt. **Entwickler sollten das richtige semantische HTML-Element anstelle von ARIA verwenden**, wenn ein solches Element existiert. Zum Beispiel haben native Elemente eingebaute [Tastaturzugänglichkeit](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), Rollen und Zustände. Wenn Sie jedoch ARIA verwenden, sind Sie dafür verantwortlich, das entsprechende Browserverhalten im Skript nachzuahmen.

[Die erste Regel der ARIA](https://www.w3.org/TR/using-aria/#rule1)-Verwendung lautet: "Wenn Sie ein natives HTML-Element oder Attribut mit den Semantik- und Verhaltensweisen verwenden können, die Sie benötigen, anstatt ein Element zweckzuentfremden und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

> [!NOTE]
> Es gibt ein Sprichwort: "Keine ARIA ist besser als schlechte ARIA." In [WebAim's Umfrage von über einer Million Startseiten](https://webaim.org/projects/million/#aria) wurde festgestellt, dass Startseiten mit vorhandener ARIA im Durchschnitt 41 % mehr erkannte Fehler aufwiesen als solche ohne ARIA. Obwohl ARIA entwickelt wurde, um Webseiten zugänglicher zu machen, kann es, wenn es falsch verwendet wird, mehr schaden als nützen.

Hier ist das Markup für ein Fortschrittsbalken-Widget:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Dieser Fortschrittsbalken ist mit einem {{HTMLElement("div")}} erstellt, das keine Bedeutung hat. Wir fügen ARIA-Rollen und -Eigenschaften hinzu, um Bedeutung hinzuzufügen. In diesem Beispiel informiert das Attribut [`role="progressbar"`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) den Browser darüber, dass es sich bei diesem Element tatsächlich um ein JavaScript-gesteuertes Fortschrittsbalken-Widget handelt. Die Attribute [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) geben die Minimal- und Maximalwerte des Fortschrittsbalkens an, und [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) beschreibt den aktuellen Stand und muss daher mit JavaScript aktualisiert werden.

Neben dem direkten Einfügen in das Markup können ARIA-Attribute dem Element hinzugefügt und dynamisch mit JavaScript-Code wie diesem aktualisiert werden:

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

Alle Inhalte, die für Benutzer ohne assistive Technologien zugänglich sind, müssen auch für assistive Technologien verfügbar gemacht werden. Ebenso sollten keine Funktionen enthalten sein, die sich ausschließlich an Benutzer von assistiven Technologien richten, die nicht auch für jene zugänglich sind, die keine assistiven Technologien verwenden. Der oben genannte Fortschrittsbalken muss gestylt werden, um wie ein Fortschrittsbalken auszusehen.

Es wäre viel einfacher gewesen, das native {{HTMLElement('progress')}}-Element zu verwenden:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> Das `min`-Attribut ist für das {{HTMLElement('progress')}}-Element nicht zulässig; sein Minimalwert ist immer `0`.

> [!NOTE]
> HTML-Landmark-Elemente ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}} usw.) haben eingebaute implizite ARIA-Rollen, sodass es nicht notwendig ist, sie zu duplizieren.

## Unterstützung

Wie bei jeder anderen Webtechnologie gibt es unterschiedliche Grade der Unterstützung für ARIA. Die Unterstützung hängt vom verwendeten Betriebssystem und Browser ab sowie von der Art der assistiven Technologie, die damit interagiert. Darüber hinaus sind die Versionen des Betriebssystems, des Browsers und der assistiven Technologie ausschlaggebende Faktoren. Ältere Softwareversionen unterstützen möglicherweise bestimmte ARIA-Rollen nicht, bieten nur teilweise Unterstützung oder melden deren Funktionalität falsch.

Es ist auch wichtig zu berücksichtigen, dass einige Personen, die auf assistive Technologie angewiesen sind, zögern, ihre Software zu aktualisieren, aus Angst, die Fähigkeit, mit ihrem Computer und Browser zu interagieren, zu verlieren. Aus diesem Grund ist es wichtig, wann immer möglich [semantische HTML-Elemente zu verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML), da semantisches HTML eine viel bessere Unterstützung für assistive Technologien bietet.

Es ist auch wichtig, Ihr erstelltes ARIA mit tatsächlicher assistiver Technologie zu testen. Dies liegt daran, dass Browser-Emulatoren und -Simulatoren nicht wirklich effektiv sind, um die volle Unterstützung zu testen. Ebenso sind Proxy-Lösungen für assistive Technologien nicht ausreichend, um die Funktionalität vollständig zu garantieren.

## Referenzen

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Referenzseiten, die alle auf MDN diskutierten WAI-ARIA-Rollen abdecken.
- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Referenzseiten, die alle auf MDN diskutierten WAI-ARIA-Zustände und -Eigenschaften abdecken.

## Standardisierungsbemühungen

- [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/)
  - : Die W3C-Spezifikation selbst.
- [WAI-ARIA-Autorpraktiken](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Die offiziellen Best Practices-Dokumente, wie man am besten gängige Widgets und Interaktionen ARIA-fiziert. Eine hervorragende Ressource.

## ARIA für geskriptete Widgets

- [Erstellen von JavaScript-Widgets mit Tastaturnavigation](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Eingebaute Elemente wie {{HTMLElement("input")}}, {{HTMLElement("button")}} usw. haben eingebaute Tastaturzugänglichkeit. Wenn Sie diese mit {{HTMLElement("div")}}s und ARIA "faken", müssen Sie sicherstellen, dass Ihre Widgets tastaturzugänglich sind.
- [Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live-Bereiche geben Bildschirmlesern Hinweise, wie Änderungen der Inhalte einer Seite zu behandeln sind.

## Videos

Die folgenden Vorträge sind eine großartige Möglichkeit, ARIA zu verstehen:

[ARIA, Accessibility APIs und Codierung wie Sie es ernst meinen! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
