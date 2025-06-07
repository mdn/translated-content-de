---
title: Checkliste für mobile Barrierefreiheit
slug: Web/Accessibility/Guides/Mobile_accessibility_checklist
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieses Dokument bietet eine prägnante Checkliste von Barrierefreiheitsanforderungen für Entwickler mobiler Apps. Es soll sich kontinuierlich weiterentwickeln, wenn neue Muster auftauchen.

## Farbe

- Farbkontrast muss den [WCAG 2.2 AA-Anforderungen](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) entsprechen:

  - Kontrastverhältnis von 4,5:1 für normalen Text (weniger als 18 Punkt oder 14 Punkt fett).
  - Kontrastverhältnis von 3:1 für großen Text (mindestens 18 Punkt oder 14 Punkt fett).

- Informationen, die durch Farbe vermittelt werden, müssen auch auf andere Weise verfügbar sein (unterstrichener Text für Links usw.).

## Sichtbarkeit

- Techniken zur Inhaltsausblendung wie Opazität null, z-index-Reihenfolge und Platzierung außerhalb des Bildschirms dürfen nicht ausschließlich zur Handhabung der Sichtbarkeit verwendet werden.
- Alles außer dem aktuell sichtbaren Bildschirm muss _wirklich_ unsichtbar sein (besonders relevant für Single-Page-Apps mit mehreren _Karten_):

  - Verwenden Sie das `hidden`-Attribut oder die Style-Eigenschaften `visibility` oder `display`.
  - Soweit nicht absolut unvermeidbar, sollte das `aria-hidden`-Attribut nicht verwendet werden.

## Fokus

- Alle aktivierbaren Elemente müssen fokussierbar sein:

  - Standardkontrollen wie Links, Buttons und Formularfelder sind standardmäßig fokussierbar.
  - Nicht-Standardkontrollen müssen eine passende [ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen, wie `button`, `link` oder `checkbox`.

- Der Fokus sollte in einer logischen und konsistenten Reihenfolge gehandhabt werden.

## Textequivalente

- Für jedes nicht ausschließlich präsentierende Nicht-Text-Element innerhalb der App muss ein Textequivalent bereitgestellt werden.

  - Verwenden Sie _alt_ und _title_, wo es angebracht ist (lesen Sie Steve Faulkners Beitrag über das [Verwenden des HTML-Title-Attributs](https://www.tpgi.com/using-the-html-title-attribute-updated/) für einen guten Leitfaden).
  - Wenn die oben genannten Attribute nicht anwendbar sind, verwenden Sie passende [ARIA Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) wie `aria-label`, `aria-labelledby` oder `aria-describedby`.

- Bilder von Text müssen vermieden werden.
- Alle Benutzeroberflächenkomponenten mit sichtbarem Text (oder Bild von Text) als Etiketten müssen den gleichen Text im programmgesteuerten [name](https://w3c.github.io/wcag/guidelines/22/#dfn-name) der Komponente verfügbar haben. [WCAG 2.1: Label in name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- Alle Formularsteuerelemente müssen Etiketten ({{ htmlelement("label") }} Elemente) im Nutzen von Screenreader-Benutzern haben.

## Umgang mit Zuständen

- Standardkontrollen wie Optionsfelder und Kontrollkästchen werden vom Betriebssystem gehandhabt. Für andere benutzerdefinierte Kontrollen müssen jedoch Zustandsänderungen über [ARIA Zustände](https://w3c.github.io/aria/#state_prop_def) wie `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded` und `aria-pressed` bereitgestellt werden.

## Orientierung

- Inhalte sollten nicht auf eine einzelne Ausrichtung, wie z. B. Hoch- oder Querformat, beschränkt sein, es sei denn, es ist wesentlich. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Beispiele, wann eine Orientierung wesentlich ist, sind eine Klavieranwendung oder ein Bankscheck.

## Allgemeine Richtlinien

- Ein App-Titel muss bereitgestellt werden.
- Überschriften dürfen die hierarchische Struktur nicht brechen.

  ```html
  <h1>Top level heading</h1>
  <h2>Secondary heading</h2>
  <h2>Another secondary heading</h2>
  <h3>Low level heading</h3>
  ```

- [ARIA Landmark Roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten verwendet werden, um eine App- oder Dokumentstruktur zu beschreiben, wie `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- Für Touch-Ereignisse stellen Sie sicher, dass Folgendes zutrifft ([WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - Das Down-Event sollte nicht dazu verwendet werden, einen Teil der Funktion auszuführen;
  - Wenn dies nicht erreicht wird, sollte der _Abschluss_ der Funktion beim Up-Event erfolgen, und es muss ein Mechanismus verfügbar sein, um die Aktion vor ihrem Abschluss abzubrechen oder die Aktion nach ihrem Abschluss rückgängig zu machen;
  - Wenn dies nicht erreicht wird, sollte das Up-Event in der Lage sein, eine Aktion rückgängig zu machen, die bei einem Down-Event ausgelöst wurde;
  - Alle oben genannten Punkte dürfen verletzt werden, wenn es wesentlich ist, die Aktion bei einem Down-Event auszulösen, meist um reale Erfahrungen zu simulieren oder um Echtzeit-Feedback zu geben. Zum Beispiel Spielsteuerungen, Klaviertastaturen oder virtuelle Tastaturen.

- Touch-Ziele müssen groß genug sein, damit der Benutzer interagieren kann (siehe die [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) für nützliche Richtlinien zur Größe von Touch-Zielen).

> [!NOTE]
> Die [Originalversion dieses Dokuments](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) wurde von [Yura Zenevich](https://yzen.github.io/) verfasst.
