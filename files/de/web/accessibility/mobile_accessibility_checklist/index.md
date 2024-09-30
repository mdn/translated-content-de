---
title: Mobile Accessibility Checklist
slug: Web/Accessibility/Mobile_accessibility_checklist
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

Dieses Dokument bietet eine prägnante Checkliste der Barrierefreiheitsanforderungen für mobile App-Entwickler. Es soll kontinuierlich weiterentwickelt werden, sobald mehr Muster auftauchen.

## Farbe

- Der Farbkontrast muss den [WCAG 2.1 AA-Level-Anforderungen](https://www.w3.org/TR/WCAG/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die über Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links usw.).

## Sichtbarkeit

- Techniken zum Verstecken von Inhalten wie Null-Deckkraft, z-index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles, was nicht auf dem aktuell sichtbaren Bildschirm ist, muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Apps mit mehreren _Karten_):

  - Verwenden Sie das `hidden`-Attribut oder die `visibility`- oder `display`-Stileigenschaften.
  - Sofern nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardsteuerungen wie Links, Schaltflächen und Formularelemente sind standardmäßig fokussierbar.
  - Nicht-Standard-Steuerungen müssen eine geeignete [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in logischer Reihenfolge und konsistenter Weise gehandhabt werden.

## Textequivalente

- Für jedes nicht ausschließlich präsentative Nicht-Text-Element innerhalb der App muss ein Textequivalent bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_ wo angebracht (lesen Sie Steve Faulkners Beitrag über [Using the HTML title attribute](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die obigen Attribute nicht anwendbar sind, verwenden Sie geeignete [ARIA-Zustände und Eigenschaften](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text sollten vermieden werden.
- Alle Benutzerschnittstellenkomponenten mit sichtbarem Text (oder Bild von Text) als Etiketten müssen den gleichen Text im programmatischen [Name](https://www.w3.org/TR/WCAG21/#dfn-name) der Komponente enthalten. [WCAG 2.1: Label in name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularelemente müssen Labels ({{ htmlelement("label") }}-Elemente) haben, die für Benutzer von Bildschirmlesegeräten von Vorteil sind.

## Zustandsverwaltung

- Standardsteuerungen wie Radio-Buttons und Kontrollkästchen werden vom Betriebssystem gehandhabt. Bei anderen benutzerdefinierten Steuerungen müssen Zustandsänderungen über [ARIA-Zustände](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) bereitgestellt werden, wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed`.

## Orientierung

- Inhalte sollten nicht auf eine einzelne Ausrichtung, wie Hoch- oder Querformat, beschränkt werden, es sei denn, dies ist wesentlich. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Ausrichtung wesentlich ist, sind eine Klavieranwendung oder ein Bankscheck.

## Allgemeine Richtlinien

- Es muss ein Titel für die App bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht brechen.

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA-Landmark-Rollen](https://www.washington.edu/accesstech/websites/regions/) sollten verwendet werden, um eine App- oder Dokumentstruktur zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Stellen Sie für Touch-Ereignisse sicher, dass Folgendes gilt ([WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Event sollte nicht verwendet werden, um einen Teil der Funktion auszuführen;
  - Bei Nichteinhaltung der obigen Richtlinie sollte die _Vervollständigung_ der Funktion auf das Up-Event gelegt werden, und es sollte ein Mechanismus vorhanden sein, um die Aktion vor ihrer Fertigstellung abzubrechen oder die Aktion nach ihrer Fertigstellung rückgängig zu machen;
  - Bei Nichteinhaltung der obigen Richtlinie sollte das Up-Event in der Lage sein, jegliche Aktion rückgängig zu machen, die bei einem Down-Event ausgelöst wurde;
  - Alle obigen Punkte dürfen verletzt werden, wenn es wesentlich ist, die Aktion beim Down-Event auszulösen, normalerweise um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu bieten. Zum Beispiel Spielsteuerungen, Klaviertastaturen oder virtuelle Tastaturen.

- Touch-Ziele müssen groß genug sein, damit der Benutzer damit interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Leitlinien zur Größe von Touch-Zielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) verfasst.
