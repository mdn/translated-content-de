---
title: "ARIA: Anwendungsrolle"
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Die `application`-Rolle weist assistive Technologien darauf hin, dass ein Element _und alle seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollen und keine traditionellen HTML-Interpretationstechniken verwendet werden sollten. Diese Rolle sollte nur verwendet werden, um sehr dynamische und desktop-ähnliche Webanwendungen zu definieren. Die meisten mobilen und Desktop-Web-Apps werden _nicht_ als Anwendungen für diesen Zweck betrachtet.

```html
<div role="application" aria-label="…">…</div>
```

Durch das Festlegen der `application`-Rolle wird angegeben, dass dieses `div`-Element und alle seine Nachkommen so behandelt werden sollen, als ob sie Teil einer Desktop-Anwendung wären.

## Beschreibung

Die `application` [Dokumentenstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles), zeigt assistiven Technologien an, dass dieser Teil des Webinhalts Elemente enthält, die keinem bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jegliche spezielle Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden, und die Steuerung sollte vollständig an den Browser und die Webanwendung übergeben werden, um Maus-, Tastatur- oder Berührungsinteraktionen zu handhaben.

In diesem Modus ist der Webautor vollständig verantwortlich für die Handhabung aller Tastatureingaben, das Fokusmanagement und andere Interaktionen und kann nicht davon ausgehen, dass assistive Technologien irgendwelche Verarbeitung ihrerseits durchführen.

Wenn die von der Anwendungsrolle umfasste Webanwendung Teile enthält, die _wie normaler Webinhalt_ behandelt werden sollten, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) verwendet werden, um solche Inhalte zu enthalten.

### Hintergrund

Aus historischen Gründen haben insbesondere auf Windows Screenreader und einige andere assistive Technologien (AT) traditionell den gesamten Webinhalt vom Browser auf einmal erfasst, nachdem er fertig geladen ist. Die ATs erstellen ihre eigene Repräsentation davon, die am meisten Sinn für einen sehbehinderten Nutzer macht, um den Inhalt zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Browse-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird in einer Einzelspaltenansicht vereinfacht. Es wird ein Tastatur-Interaktionsmodell erstellt, das sehr ähnlich wie in einem Textverarbeitungsprogramm ist, wo Benutzer Zeile für Zeile, Satz für Satz oder Absatz für Absatz lesen können. Das AT liest alle Semantik wie Links, Überschriften, Formulare, Tabellen, Listen oder Bilder.

Zusätzlich wurde im Laufe der Jahre eine Reihe sogenannter _Schnellnavigationstasten_ etabliert, die es sehbehinderten Nutzern ermöglichen, eine Seite über einen bestimmten Elementtyp zu überfliegen. Solche Elemente umfassen normalerweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Regionsmarkierungen.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verbrauchen sie selbst, ohne sie an den Browser oder andere Benutzeragenten weiterzuleiten. Um mit einer Webseite interagieren zu können, wird eine Standardreihe von Widgets erkannt, bei denen der Druck einer bestimmten Taste (meistens die <kbd>Enter</kbd>-Taste) diesen Modus ausschaltet. Der Screenreader-Modus, oft _Formularmodus_ oder _Fokusmodus_ genannt, lässt alle Tastatureingaben wieder an den Browser durch. <kbd>Escape</kbd> ist der gebräuchlichste Weg, um in den _Browse_-Modus zurückzukehren, aber bei einem bestimmten `application`-Abschnitt erfordern einige Screenreader möglicherweise andere Tasten, um diesen Modus absichtlich zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die `application`-Rolle ist dafür gedacht, eine Möglichkeit für Widgets bereitzustellen, die nicht Teil des Standardsatzes sind, um in ATs, die sowohl den _Browse_- als auch den _Fokus_-Modus verwenden, direkt interagierbar zu sein. Die meisten gängigen Widgets haben erwartete Tastatur-Interaktionsverhalten. Aufgrund dessen würde eine vom Webautor erstellte benutzerdefinierte Tastaturerfahrung zu einer verwirrenden Erfahrung führen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung anzugeben, die als normaler Webinhalt behandelt werden sollen
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das dargestellt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verweist auf die ID eines Elements, das zusätzliche Anweisungen zum Navigieren oder Bedienen dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Wird verwendet, um eine beschreibendere Rollentext für Screenreader anzugeben. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf das es gesetzt ist.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, ist das Gruppenelement, das von diesem Element besessen oder kontrolliert wird, erweitert, oder `false`, wenn es eingeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Gibt an, dass ein Popup, wie ein Menü oder Dialog, durch das Element ausgelöst werden kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann alles sein, was mit dem speziellen Widget verbunden ist, das implementiert wird. In einer Folienanwendung könnte zum Beispiel ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und das Audiowiedergabe über einen ARIA-Livebereich zur Kommunikation der Position und Überlappungsstatus mit anderen Objekten nutzt. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Space</kbd> und <kbd>Enter</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung gehandhabt werden. Eine Ausnahme ist, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das Tastaturnavigation vom Browser unterstützt, zum Beispiel ein [input](/de/docs/Web/HTML/Reference/Elements/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu verarbeiten und den Fokus zu steuern.
- Click, Touch
  - : Nach Bedarf für Ihr Widget behandeln.
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungskontexts zu verwalten. Wird als Reaktion auf Tastatur- oder andere Anwendungsereignisse gesetzt, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die `application`-Rolle hat kein zugehöriges HTML-Widget und ist daher vollständig frei formbar. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass Benutzer nicht in einer Fokussperre feststecken, aus der sie nicht herauskommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zum regulären Webinhalt auf anderen Teilen der Seite, müssen behandelt werden. Verwenden Sie sie weise und vorsichtig und denken Sie daran, sie zu testen!

## Beispiele

Einige prominente Webanwendungen, die die Anwendungsrolle ordnungsgemäß verwenden oder verwendet haben, sind:

- Google Docs, Tabellen und Präsentationen
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie der auf dem Mozilla Developer Network verwendete
- Einige Teile von Gmail

## Barrierefreiheitshinweise

Das falsche Verwenden der `application`-Rolle kann unbeabsichtigt den Zugang zu Informationen auf einer Webseite beeinträchtigen, seien Sie daher sehr aufmerksam beim Gebrauch. Überlegen Sie genau, ob Sie sie wirklich benötigen und nicht einfach eine Reihe anderer bekannter Widgets verwenden können, um dieselbe Aufgabe zu erfüllen.

Wenn verwendet, sollte die Anwendungsrolle dem kleinstmöglichen gemeinsamen Container hinzugefügt werden, nicht auf das `<body>`-Element. Stellen Sie außerdem sicher, dass Sie das Geschriebene mit assistiver Technologie testen, um zu überprüfen, ob es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Die Anwendung der `application`-Rolle wird dazu führen, dass dieses und alle Nachkommenelemente dieses Elements wie Anwendungskontent behandelt werden und nicht wie Webinhalt. Jegliche Leseverfahren, die assistive Technologien möglicherweise für Webinhalte haben, werden nicht angewendet.

## Siehe auch

- [Wenn Sie die WAI-ARIA-Rolle `application` verwenden, tun Sie dies bitte weise](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blogbeitrag von Marco Zehe
- [Die Verwendung der ARIA `application`-Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
