---
title: "ARIA: Anwendungsrolle"
short-title: application
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `application`-Rolle signalisiert unterstützenden Technologien, dass ein Element _und all seine Kinder_ ähnlich wie eine Desktop-Anwendung behandelt werden sollten und keine herkömmlichen HTML-Interpretationstechniken verwenden werden sollten. Diese Rolle sollte nur zur Definition sehr dynamischer und desktopähnlicher Webanwendungen verwendet werden. Die meisten mobilen und Desktop-Webanwendungen _gelten nicht_ als Anwendungen in diesem Zusammenhang.

```html
<div role="application" aria-label="…">…</div>
```

Durch das Festlegen der `application`-Rolle wird angegeben, dass dieses `div`-Element und alle seine Nachkommen so behandelt werden sollen, als wären sie Teil einer Desktop-Anwendung.

## Beschreibung

Die `application` [Dokumentstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) signalisiert unterstützenden Technologien, dass dieser Teil des Webinhalts Elemente enthält, die keinem anderen bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jegliche spezielle Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden, und die Kontrolle sollte vollständig dem Browser und der Webanwendung überlassen werden, um Maus-, Tastatur- oder Touch-Interaktionen zu handhaben.

In diesem Modus ist der Webautor vollständig verantwortlich für die Handhabung sämtlicher Tastatureingaben, Fokusmanagement und anderer Interaktionen und kann nicht davon ausgehen, dass unterstützende Technologien irgendeine Verarbeitung auf ihrer Seite vornehmen.

Wenn die von der Anwendungsrolle umfasste Webanwendung Teile enthält, die wie normaler Webinhalt behandelt werden _sollten_, sollte eine Rolle von [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) verwendet werden, um solchen Inhalt aufzunehmen.

### Hintergrund

Aus historischen Gründen, insbesondere unter Windows, haben Bildschirmleser und einige andere unterstützende Technologien (AT) traditionell den gesamten Webinhalt auf einmal vom Browser erfasst, nachdem dieser das Laden abgeschlossen hatte. Die ATs erstellen ihre eigene Darstellung davon, die für einen sehbehinderten Benutzer am sinnvollsten ist, um den Inhalt zu konsumieren. Dies wird oft als _virtuelles Dokument_, _Browser-Modus_ oder ähnliche Begriffe bezeichnet. Das Dokument wird in eine einspaltige Ansicht optimiert. Ein Tastatur-Interaktionsmodell wird erstellt, das einem Textverarbeitungsprogramm sehr ähnlich ist, wo Benutzer zeilenweise, satzweise oder absatzweise lesen können. Die AT wird alle semantischen Elemente wie Links, Überschriften, Formularelemente, Tabellen, Listen oder Bilder lesen.

Zusätzlich wurde im Laufe der Jahre eine Gruppe sogenannter _Schnellnavigationstasten_ etabliert, die es sehbehinderten Benutzern ermöglicht, über einen bestimmten Elementtyp durch eine Seite zu blättern. Zu solchen Elementen gehören normalerweise Überschriften, Formulareingabefelder, Listen, Tabellen, Links, Grafiken oder Landmarkenregionen.

Damit all dies funktioniert, fangen ATs nahezu alle Tastatureingaben ab und verarbeiten sie selbst, sodass nichts an den Browser oder einen anderen Benutzeragenten durchgelassen wird. Um mit einer Webseite interagieren zu können, wird ein Standardsatz von Widgets erkannt, mit denen, wenn eine bestimmte Taste (normalerweise die <kbd>Enter</kbd>-Taste) gedrückt wird, dieser Modus abgeschaltet wird. Der Bildschirmleser-Modus, oft _Formularmodus_ oder _Fokusmodus_ genannt, lässt alle Tastatureingaben wieder an den Browser durch. <kbd>Escape</kbd> ist die gebräuchlichste Methode, um in den _Browse_-Modus zurückzukehren, aber innerhalb eines bestimmten `application`-Abschnitts können einige Bildschirmleser andere Tasten erfordern, um diesen Modus gezielt zu verlassen. Zum Beispiel <kbd>NUMPAD PLUS</kbd> bei JAWS.

Die `application`-Rolle wurde entworfen, um eine Möglichkeit zu bieten, Widgets, die nicht Teil des Standardsatzes sind, für die direkte Interaktion in ATs zugänglich zu machen, die sowohl den _Browse_- als auch den _Focus_-Modus zur Interaktion mit Webinhalten nutzen. Die meisten gängigen Widgets haben erwartete Tastatur-Interaktionsverhalten. Aus diesem Grund würde eine benutzerdefinierte Tastaturerfahrung, die von einem Webautor erstellt wird, eine verwirrende Erfahrung schaffen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Wird verwendet, um Teile der Anwendung anzuzeigen, die als normaler Webinhalt behandelt werden sollten
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Verwendet, um den Namen der Anwendung oder den Zweck des Widgets anzugeben, das angezeigt wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwendet, um auf die ID eines Elements zu verweisen, das zusätzliche Anweisungen zum Navigieren oder Bedienen dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Verwendet, um der Anwendung einen beschreibenderen Text für Bildschirmleser zu geben. Dies sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Zeigt an, dass ein Element sichtbar, aber deaktiviert ist
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Ein Verweis auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem es gesetzt ist
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn auf `true` gesetzt, ist das Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, erweitert, oder `false`, wenn es eingeklappt ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Zeigt an, dass ein Popup, wie ein Menü oder ein Dialog, ausgelöst werden kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Kontrolle des Webautors und kann alles sein, was mit dem bestimmten implementierten Widget verbunden ist. In einer Präsentationsanwendung könnte beispielsweise ein Widget erstellt werden, das die Pfeiltasten verwendet, um Elemente auf der Folie zu positionieren, und über ein ARIA-Live-Region-Audio-Feedback die Positions- und Überlappungsstatus mit anderen Objekten kommuniziert. Der Fokus wird über _aria-activedescendant_ verwaltet.

Die Tasten <kbd>Tab</kbd>, <kbd>Space</kbd> und <kbd>Enter</kbd> sowie <kbd>Escape</kbd> müssen von der Anwendung gehandhabt werden. Die einzige Ausnahme besteht, wenn der Fokus auf ein Standard-Widget innerhalb der Anwendung gesetzt wird, das die Tastaturnavigation vom Browser unterstützt, zum Beispiel ein [input](/de/docs/Web/HTML/Reference/Elements/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu verwalten und den Fokus zu steuern
- Click, Touch
  - : Entsprechend dem Widget auch handhaben
- Änderungen von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungskontextes zu verwalten. Wird als Reaktion auf Tastatur- oder andere Anwendungseingaben gesetzt, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Die `application`-Rolle hat kein entsprechendes HTML-Widget und ist daher völlig frei formbar. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass Benutzer nicht in einer Fokussperre gefangen bleiben, aus der sie nicht entkommen können. Alle Aspekte der Interaktion, einschließlich der Rückkehr zu den regulären Webinhalten auf anderen Teilen der Seite, müssen gehandhabt werden. Verwenden Sie dies weise und vorsichtig und denken Sie daran, es zu testen!

## Beispiele

Einige bekannte Webanwendungen, die die Anwendungsrolle korrekt verwenden oder verwendet haben, sind:

- Google Docs, Sheets und Slides
- CKEditor und TinyMCE WYSIWYG-Webeditoren, wie sie auf dem Mozilla Developer Network verwendet werden
- Einige Teile von Gmail

## Barrierefreiheitserwägungen

Die unsachgemäße Verwendung der `application`-Rolle kann unbeabsichtigt den Zugang zu Informationen auf einer Webseite verhindern, seien Sie daher sehr achtsam bei deren Verwendung. Überlegen Sie gründlich, ob Sie sie tatsächlich benötigen und nicht einfach eine Reihe anderer bekannter Widgets verwenden können, um die gleiche Aufgabe zu erfüllen.

Wird sie verwendet, sollte die Anwendungsrolle auf den kleinstmöglichen gemeinsamen Container angewendet werden, nicht auf das `<body>`-Element zum Beispiel. Testen Sie auch sicherheitshalber, was Sie geschrieben haben, mit unterstützender Technologie, um zu überprüfen, ob es wie beabsichtigt funktioniert.

## Spezifikationen

{{Specifications}}

## Vorrangordnung

Die Anwendung der `application`-Rolle bewirkt, dass dieses und alle Nachkommenelemente dieses Elements als Anwendungsinhalt und nicht als Webinhalt behandelt werden. Alle Lesemechanismen, die unterstützende Technologien möglicherweise für Webinhalte haben, werden nicht angewendet.

## Siehe auch

- [If you use the WAI-ARIA role `application`, please do so wisely](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - Blog-Beitrag von Marco Zehe
- [Using the ARIA `application` role](https://tink.uk/using-the-aria-application-role/) - von Léonie Watson
