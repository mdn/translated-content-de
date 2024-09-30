---
title: "ARIA: Anwendungsrolle"
slug: Web/Accessibility/ARIA/Roles/application_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `application`-Rolle zeigt Hilfstechnologien an, dass ein Element _und alle seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollten und keine herkömmlichen HTML-Interpretationstechniken verwendet werden sollten. Diese Rolle sollte nur verwendet werden, um sehr dynamische und desktopähnliche Webanwendungen zu definieren. Die meisten mobilen und Desktop-Web-Apps werden für diesen Zweck _nicht_ als Anwendungen betrachtet.

```html
<div role="application" aria-label="…">…</div>
```

Durch die Angabe der `application`-Rolle wird angegeben, dass dieses `div`-Element und alle seine Nachfahren so behandelt werden müssen, als wären sie Teil einer Desktop-Anwendung.

## Beschreibung

Die `application` [Dokumentstruktur-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles) zeigt Hilfstechnologien an, dass dieser Teil des Webinhalts Elemente enthält, die keinem anderen bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jegliche spezielle Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig dem Browser und der Webanwendung überlassen werden, um Maus-, Tastatur- oder Touch-Interaktionen zu handhaben.

In diesem Modus ist der Webautor vollständig verantwortlich für die Handhabung jeglicher Tastatureingaben, Fokusverwaltung und andere Interaktionen und kann nicht davon ausgehen, dass Hilfstechnologien auf ihrer Seite eine Verarbeitung durchführen.

Wenn die von der Anwendungsrolle umfasste Webanwendung Teile enthält, die _wie normaler Webinhalt_ behandelt werden sollten, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) verwendet werden, um solche Inhalte zu enthalten.

### Hintergrund

Aus historischen Gründen, insbesondere unter Windows, haben Bildschirmleser und einige andere Hilfstechnologien (AT) traditionell den gesamten Webinhalt auf einmal vom Browser erfasst, nachdem er vollständig geladen war. Die ATs erstellen ihre eigene Darstellung davon, die am sinnvollsten für sehbehinderte Nutzer ist, um den Inhalt zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Browse-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird auf eine einspaltige Ansicht optimiert. Ein Tastatur-Interaktionsmodell wird erstellt, das einem Textverarbeitungsprogramm sehr ähnlich ist, in dem Benutzer zeilenweise, satzweise oder absatzweise lesen können. Die AT wird jegliche Semantik wie Links, Überschriften, Formularsteuerungen, Tabellen, Listen oder Bilder vorlesen.

Darüber hinaus hat sich im Laufe der Jahre ein Satz sogenannter _Schnelltasten_ etabliert, der es sehbehinderten Nutzern erlaubt, eine Seite über einen bestimmten Elementtyp zu überfliegen. Solche Elemente umfassen normalerweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmarkenregionen.

Damit all dies funktioniert, fangen ATs fast alle Tastatureingaben ab und verbrauchen sie selbst, ohne etwas an den Browser oder andere Benutzeragenten durchzulassen. Um mit einer Webseite interagieren zu können, wird ein Standardsatz von Widgets erkannt, bei dem durch Drücken einer bestimmten Taste (normalerweise der <kbd>Eingabe</kbd>-Taste) dieser Modus ausgeschaltet wird. Der Bildschirmlesermodus, oft _Formularmodus_ oder _Fokusmodus_ genannt, lässt alle Tastatureingaben wieder an den Browser durch. <kbd>Escape</kbd> ist der häufigste Weg, um in den _Browse_-Modus zurückzukehren, aber innerhalb eines bestimmten `application`-Abschnitts erfordern einige Bildschirmleser möglicherweise andere Tasten, um diesen Modus gezielt zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> mit JAWS.

Die `application`-Rolle ist darauf ausgelegt, eine Möglichkeit für Widgets zu bieten, die nicht Teil des Standardsatzes sind, um für die direkte Interaktion in ATs zugänglich zu sein, die sowohl _Browse_- als auch _Fokus_-Modi für die Interaktion mit Webinhalten verwenden. Die meisten gängigen Widgets haben erwartete Tastatur-Interaktionsverhalten. Aufgrund dessen würde eine benutzerdefinierte Tastaturerfahrung, die von einem Webautor erstellt wurde, ein verwirrendes Erlebnis erzeugen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung anzugeben, die als normaler Webinhalt behandelt werden sollten
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wird verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das angezeigt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Wird verwendet, um die idref eines Elements anzugeben, das zusätzliche Anweisungen zum Navigieren oder Bedienen dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Wird verwendet, um der Anwendung einen beschreibenderen Rollentext bereitzustellen, der von Bildschirmlesern gesprochen wird. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass ein Element sichtbar, aber deaktiviert ist
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es gesetzt ist
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, wird das Gruppierungselement, das diesem Element gehört oder von ihm kontrolliert wird, erweitert oder auf `false` gesetzt, wenn es zusammengeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt an, dass ein Popup vorhanden ist, wie ein Menü oder Dialog, das von dem Element ausgelöst werden kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann alles sein, was mit dem bestimmten implementierten Widget verbunden ist. In einer Präsentationsanwendung könnte beispielsweise ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und das mithilfe einer ARIA-Live-Region Audio-Feedback gibt, um die Position und den Überlappungsstatus mit anderen Objekten zu kommunizieren. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Leerzeichen</kbd> und <kbd>Eingabe</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung gehandhabt werden. Die einzige Ausnahme ist, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das von der Tastatur-Navigation des Browsers unterstützt wird, zum Beispiel ein [input](/de/docs/Web/HTML/Element/input)-Element.

### Erforderliche JavaScript-Funktionen

- `keyPress`
  - : Wird verwendet, um die Tastatureingaben zu verarbeiten und den Fokus zu steuern
- `Click`, `Touch`
  - : Handhaben Sie diese entsprechend für Ihr Widget ebenfalls
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungskontextes zu verwalten. Wird als Reaktion auf Tastatur- oder andere Anwendungsereignisse gesetzt, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die `application`-Rolle hat kein zugehöriges HTML-Widget und ist daher völlig frei geformt. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass Benutzer nicht in eine Fokussperre geraten, aus der sie nicht herauskommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zu den regulären Webinhalten auf anderen Teilen der Seite, müssen gehandhabt werden. Nutzen Sie es weise und vorsichtig und denken Sie daran, es zu testen!

## Beispiele

Einige bekannte Webanwendungen, die die Anwendungsrolle ordnungsgemäß verwenden oder verwendet haben, sind:

- Google Docs, Sheets und Slides
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie der, der auf dem Mozilla Developer Network verwendet wird
- Einige Teile von Gmail

## Barrierefreiheitshinweise

Eine falsche Verwendung der `application`-Rolle kann unbeabsichtigt den Zugriff auf Informationen auf einer Webseite nehmen, daher sollten Sie sehr sorgfältig mit ihrer Verwendung umgehen. Überlegen Sie gründlich, ob Sie sie wirklich benötigen und nicht einfach einen Satz anderer bekannter Widgets verwenden können, um die gleiche Aufgabe zu erreichen.

Wenn verwendet, sollte die Anwendungsrolle dem niedrigsten gemeinsamen Behälter hinzugefügt werden, nicht zum Beispiel dem `<body>`-Element. Stellen Sie auch sicher, dass das Geschriebene mit Hilfstechnologie getestet wird, um zu überprüfen, ob es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Prioritätsordnung

Die Anwendung der `application`-Rolle führt dazu, dass dieses Element und alle des Nachfahren dieses Elements als Anwendungsinhalt behandelt werden, nicht als Webinhalt. Jegliche Lese-Mechanismen, die Hilfstechnologien für Webinhalte haben könnten, werden nicht zutreffen.

## Siehe auch

- [Wenn Sie die WAI-ARIA Rolle `application` verwenden, tun Sie dies bitte weise](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blogbeitrag von Marco Zehe
- [Die Verwendung der ARIA `application`-Rolle](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
