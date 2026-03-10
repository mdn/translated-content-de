---
title: Mobile Accessibility Checkliste
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Dieses Dokument bietet eine prägnante Checkliste von Barrierefreiheitsanforderungen für mobile App-Entwickler. Es soll kontinuierlich weiterentwickelt werden, wenn mehr Muster auftreten.

## Farbe

- Der Farbkontrast muss den [WCAG 2.2 AA-Anforderungen](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) entsprechen:
  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links usw.).

## Sichtbarkeit

- Techniken zur Inhaltsausblendung wie Null-Deckkraft, z-Index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Behandlung der Sichtbarkeit verwendet werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders wichtig für Single-Page-Apps mit mehreren _Karten_):
  - Verwenden Sie das `hidden`-Attribut oder `visibility`- oder `display`-Stileigenschaften.
  - Sofern nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:
  - Standardkontrollen wie Links, Schaltflächen und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-standardisierte Kontrollen müssen eine passende [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen Reihenfolge und konsistent gehandhabt werden.

## Textequivalente

- Für jedes nicht ausschließlich präsentationale Nicht-Text-Element innerhalb der App muss ein Textequivalent bereitgestellt werden.
  - Verwenden Sie _alt_ und _title_ wo angemessen (lesen Sie Steve Faulkners Beitrag über [die Verwendung des HTML-Title-Attributs](https://vispero.com/resources/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Textbilder müssen vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Textbildern) als Labels müssen denselben Text im programmatischen [name](https://w3c.github.io/wcag/guidelines/22/#dfn-name) der Komponente haben. [WCAG 2.1: Label in Name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen Labels ({{ htmlelement("label") }}-Elemente) haben, um benutzerfreundlich für Bildschirmlesegeräte zu sein.

## Zustandsverwaltung

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem verwaltet. Für andere benutzerdefinierte Steuerungen müssen jedoch Zustandsänderungen über [ARIA-Zustände](https://w3c.github.io/aria/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`, und `aria-pressed`.

## Ausrichtung

- Inhalte sollten nicht auf eine einzige Ausrichtung wie Hoch- oder Querformat beschränkt sein, es sei denn, es ist unerlässlich. [WCAG 2.1: Ausrichtung](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
  - Beispiele, wann eine Ausrichtung unerlässlich ist, sind eine Klavieranwendung oder ein Bankscheck.

## Allgemeine Leitlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die Hierarchiestruktur nicht brechen

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten verwendet werden, um die Struktur einer App oder eines Dokuments zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Touch-Ereignisse stellen Sie sicher, dass Folgendes zutrifft ([WCAG 2.1: Zeiger-Abbrechen](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):
  - Das Down-Ereignis sollte nicht verwendet werden, um einen Teil der Funktion auszuführen;
  - Wenn das oben genannte fehlschlägt, sollte der _Abschluss_ der Funktion beim Up-Ereignis erfolgen, und es muss ein Mechanismus vorhanden sein, um die Handlung vor ihrer Fertigstellung abzubrechen oder rückgängig zu machen, nachdem sie abgeschlossen wurde;
  - Wenn das oben genannte fehlschlägt, sollte das Up-Ereignis in der Lage sein, jede Aktion rückgängig zu machen, die auf einem Down-Ereignis ausgelöst wurde;
  - Alle oben genannten Punkte dürfen verletzt werden, wenn es unerlässlich ist, die Aktion beim Down-Ereignis auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu geben. Zum Beispiel bei Spielsteuerungen, Klaviertastaturen oder virtuellen Tastaturen.

- Touch-Ziele müssen groß genug sein, damit der Benutzer interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Touch-Zielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) geschrieben.
