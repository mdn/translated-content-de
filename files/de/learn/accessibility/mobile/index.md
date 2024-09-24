---
title: Mobile Zugänglichkeit
slug: Learn/Accessibility/Mobile
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

Da der Zugriff auf das Web über mobile Geräte so beliebt ist und anerkannte Plattformen wie iOS und Android umfassende Zugänglichkeitstools bieten, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt spezielle Überlegungen zur Zugänglichkeit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu verstehen, welche Probleme mit der Zugänglichkeit auf mobilen Geräten
        bestehen und wie man sie überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Zugänglichkeit auf mobilen Geräten

Der Zustand der Zugänglichkeit — und die Unterstützung von Webstandards im Allgemeinen — ist auf modernen mobilen Geräten gut. Die Zeiten sind vorbei, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten, was Entwickler dazu zwang, Browser-Sniffing zu verwenden und ihnen völlig getrennte Seiten zu bieten (obwohl immer noch einige Unternehmen die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können mobile Geräte normalerweise vollwertige Websites verarbeiten, und die Hauptplattformen haben sogar Bildschirmleser integriert, um sehbehinderten Nutzern die erfolgreiche Nutzung zu ermöglichen. Moderne mobile Browser bieten ebenfalls eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und benutzbar zu machen, müssen Sie nur allgemeine gute Webdesign- und Zugänglichkeitspraktiken befolgen.

Es gibt einige Ausnahmen, die auf mobilen Geräten besondere Berücksichtigung erfordern; die wichtigsten sind:

- Steuermechanismen — Stellen Sie sicher, dass Schnittstellensteuerungen wie Schaltflächen auf mobilen Geräten (d.h. hauptsächlich Touchscreen) ebenso zugänglich sind wie auf Desktops/Laptops (hauptsächlich Maus/Tastatur).
- Benutzereingabe — Machen Sie die Anforderungen an Benutzereingaben auf mobilen Geräten so schmerzlos wie möglich (z.B. in Formularen, halten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownloadgrößen sparen und über die Bereitstellung von Bildern für hochauflösende Bildschirme nachdenken.

## Zusammenfassung der Bildschirmlesertests auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Bildschirmleser. Diese funktionieren ähnlich wie Desktop-Bildschirmleser, werden jedoch hauptsächlich mit Touch-Gesten statt mit Tastenkombinationen bedient.

Werfen wir einen Blick auf die beiden wichtigsten: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Bildschirmleser ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, suchen Sie nach Ihrem Handymodell und Ihrer Android-Version und sehen Sie dann nach, wo sich das TalkBack-Menü befindet. Dies unterscheidet sich stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z.B. Samsung) haben TalkBack in neueren Telefonen nicht einmal, sondern setzen stattdessen auf ihren eigenen Bildschirmleser.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schiebeschalter, um TalkBack zu aktivieren. Befolgen Sie alle weiteren Bildschirmaufforderungen, die Ihnen angezeigt werden.

Wenn TalkBack aktiviert ist, sind die Grundsteuerungen Ihres Android-Geräts etwas anders. Beispielsweise:

1. Einmaliges Tippen auf eine App wählt sie aus, und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts bewegen Sie sich zwischen Apps oder Schaltflächen/Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch zweimaliges Tippen irgendwo wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie sich bewegen.

Wenn Sie TalkBack ausschalten möchten:

1. Kehren Sie zum Bildschirm des TalkBack-Menüs zurück (verwenden Sie die derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schiebeschalter und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie mit zwei Fingern nach links und rechts wischen, um zwischen ihnen zu wechseln.

Für eine vollständigere Liste der TalkBack-Gesten sehen Sie sich [Verwendung von TalkBack-Gesten](https://support.google.com/accessibility/android/answer/6151827) an.

#### Entsperren des Telefons

Wenn TalkBack aktiviert ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Bildschirmrand nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm, um es einzugeben.

Sie können auch durch Berühren erkunden, um die _Entsperr_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppelt darauf tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht den Zugriff auf globale und lokale Kontextmenüs, wo immer Sie sich auf dem Gerät befinden. Ersteres bietet globale Optionen, die sich auf das Gerät als Ganzes beziehen, und letzteres bietet Optionen, die nur für die aktuelle App/den aktuellen Bildschirm gelten, auf dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um die verschiedenen Optionen durchzugehen.
4. Nachdem Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen Optionen, die unter den globalen und lokalen Kontextmenüs verfügbar sind, siehe [Verwenden globaler und lokaler Kontextmenüs](https://support.google.com/accessibility/android/answer/6007066).

#### Durchsuchen von Webseiten

Sie können das lokale Kontextmenü im Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur über Überschriften, Formularsteuerungen oder Links navigieren oder Zeile für Zeile navigieren usw.

Beispielsweise mit aktiviertem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die mehrere Überschriften enthält, beispielsweise die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und lassen Sie Ihren Finger dann los, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu navigieren.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um in das lokale Inhaltsmenü zu gelangen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Wegmarken" finden.
7. Doppeltippen Sie, um es auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Wegmarken zu wechseln.
8. Um in den Standardmodus zurückzukehren, betreten Sie das lokale Kontextmenü erneut, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Siehe [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um es zu aktivieren, gehen Sie zu Ihrer _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App > Allgemein > Bedienungshilfen > VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einfaches Tippen bewirkt, dass das Element ausgewählt wird, auf das Sie tippen; Ihr Gerät spricht das Element, auf das Sie getippt haben.
2. Sie können auch die Elemente auf dem Bildschirm durchsuchen, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln oder indem Sie Ihren Finger auf dem Bildschirm hin und her gleiten lassen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), tippen Sie irgendwo auf dem Bildschirm zweimal.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — z.B. ein Foto in der Kamera-App aufzunehmen.

Um es wieder zu deaktivieren, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den oben aufgeführten Gesten, und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie üblich. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben erläutert) und anschließend auf jede Nummer doppelt tippen, wenn Sie die richtige gefunden haben, um sie einzugeben.

#### Verwendung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell zwischen einer Reihe von häufig verwendeten Optionen wählen können. Um ihn zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie ein Zifferblatt drehen. Jede Option wird laut vorgelesen, während Sie weiterdrehen. Sie können hin und her gehen, um die Optionsliste durchzugehen.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie ändern können (wie z.B. Lautstärke oder Lesegeschwindigkeit), können Sie mit einem Finger nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextabhängig — sie unterscheiden sich je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe unten für ein Beispiel).

#### Durchsuchen von Webseiten

Lassen Sie uns Web-Browsing mit VoiceOver ausprobieren:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die mehrere Überschriften enthält, wie z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur gedrückt, bis das gewünschte Zeichen angezeigt wird, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppelt antippen, um es auszuwählen (z.B. einem Link zu folgen).
5. Standardmäßig wird die ausgewählte Rotor-Option die Lesegeschwindigkeit sein; Sie können derzeit nach oben und unten wischen, um die Lesegeschwindigkeit zu erhöhen oder zu verringern.
6. Jetzt drehen Sie zwei Finger auf dem Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Lesegeschwindigkeit_: Ändern Sie die Lesegeschwindigkeit.
   - _Container_: Wechselt zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechselt zwischen den Überschriften auf der Seite.
   - _Links_: Wechselt zwischen den Links auf der Seite.
   - _Formularsteuerungen_: Wechselt zwischen den Formularsteuerungen auf der Seite.
   - _Sprache_: Wechselt zwischen verschiedenen Übersetzungen, wenn sie verfügbar sind.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Referenz, die die verfügbaren VoiceOver-Gesten und weitere Tipps zum Testen der Zugänglichkeit auf iOS abdeckt, siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem CSS- und JavaScript-Artikel zur Zugänglichkeit haben wir die Idee von Ereignissen kennengelernt, die spezifisch für einen bestimmten Mechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zum Zurückspringen, diese verursachen Zugänglichkeitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Zum Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis in Bezug auf Zugänglichkeit gut — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf das der Handler eingestellt ist, durch Tabben und Drücken von Enter/Return oder durch Tippen auf einem Touchscreen-Gerät aufgerufen werden. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html)-Beispiel ([sehen Sie es live in Aktion](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Alternativ schaffen Maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht mit nicht-mausgesteuerten Steuerungen aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder Berührung zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie unterschiedliche, aber gleichwertige Ereignisse verwenden — beispielsweise funktionieren Berührungsveranstaltungen auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Berührungsveranstaltungen zusammen verwendet werden — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch vollständig funktionale Beispiele sehen, die zeigen, wie unterschiedliche Steuerungsmechanismen implementiert werden können unter [Implementierung von Spielsteuerungsmechanismen](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Merkmale Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und Auflösung, damit sie für Benutzer unterschiedlicher Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte angegangen werden müssen, sind:

- Die Eignung von Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert beispielsweise nicht so gut auf einem schmalen Bildschirm, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [media queries](/de/docs/Web/CSS/CSS_media_queries), [viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelöst werden.
- Einsparen der heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Gegenstücke, und sie sind eher auf langsamen Netzwerkverbindungen. Daher ist es ratsam, kleinere Bilder für Geräte mit schmalem Bildschirm bereitzustellen, wo dies sinnvoll ist. Dies können Sie mit [responsive Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) handhaben.
- Denken an hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit die Anzeige weiterhin scharf aussieht. Auch hier können Sie Bilder gegebenenfalls mit responsiven Bildtechniken bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorgrafikformat erfüllt werden, das heute gut über Browser hinweg unterstützt wird. SVG hat eine kleine Dateigröße und bleibt unabhängig von der Anzeigegröße scharf (siehe [Vektorgrafiken zum Web hinzufügen](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion von Techniken des responsiven Designs führen, da diese an anderer Stelle auf MDN behandelt werden (siehe die obigen Links).

### Spezifische mobile Überlegungen

Es gibt andere wichtige Themen, die bei der Zugänglichkeit von mobilen Websites zu berücksichtigen sind. Wir haben hier einige aufgeführt, werden aber bei Bedarf weitere hinzufügen.

#### Zoomen nicht deaktivieren

Mit [viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, das Zoomen zu deaktivieren. Stellen Sie immer sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten `user-scalable=no` nach Möglichkeit niemals setzen — viele Menschen sind auf das Zoomen angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen durch Zoomen das UI beschädigt wird; in solchen Fällen sollten Sie, wenn Sie das Zoomen deaktivieren müssen, eine andere Art von Äquivalent bereitstellen, wie zum Beispiel eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihr UI nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr üblich, Medienabfragen und andere Technologien zu verwenden, um das Navigationsmenü zu verkleinern, sodass es auf ein kleines Symbol oben im Display schrumpft — das nur dann gedrückt werden kann, um das Menü anzuzeigen, wenn es benötigt wird — wenn die Seite auf mobilen Geräten angezeigt wird. Dies wird oft durch ein "drei horizontale Linien"-Symbol dargestellt, und das Designmuster wird folglich als "Hamburger-Menü" bezeichnet.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass die Steuerung zur Anzeige mit den geeigneten Steuermechanismen (normalerweise Berührung für Mobilgeräte) zugänglich ist, wie oben in [Steuermechanismen](#steuermechanismen) beschrieben, und dass der Rest der Seite auf eine Weise verschoben oder verborgen wird, während das Menü genutzt wird, um Verwirrung beim Navigieren zu vermeiden.

Klicken Sie hier für ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist die Eingabe von Daten in der Regel unangenehmer für Nutzer als die entsprechende Erfahrung auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mit einer Desktop- oder Laptop-Tastatur einzugeben als mit einer Touchscreen-Virtuellen Tastatur oder einer kleinen mobilen physischen Tastatur.

Aus diesem Grund lohnt es sich, das erforderliche Tippen zu minimieren. Als Beispiel könnten Sie den Nutzern anstatt eines normalen Texteingabefeldes, in dem sie ihren Jobtitel jedes Mal eingeben müssen, ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine Option "Andere" anbieten, die ein Texteingabefeld anzeigt, in das alle Ausreißer eingegeben werden können. Ein einfaches Beispiel hierfür sehen Sie in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (siehe das [Beispiel für häufige Jobtypen live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es lohnt sich auch zu überlegen, HTML-Formulareingabetypen wie Datum auf mobilen Plattformen zu verwenden, da sie diese gut handhaben — sowohl Android als auch iOS zum Beispiel zeigen benutzerfreundliche Widgets, die gut zum Gerät passt. Sehen Sie [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (siehe die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese zu laden und auf mobilen Geräten zu manipulieren. Zum Beispiel:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen/Telefonnummern.
- Die Typen `time` und `date` zeigen geeignete Auswahlprogramme für die Auswahl von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bieten möchten, könnten Sie immer anderes Markup an Ihre mobilen Geräte mittels Feature-Erkennung liefern. Siehe [Eingabetypen](https://diveinto.html5doctor.com/detect.html#input-types) für rohe Informationen zur Erkennung verschiedener Eingabetypen und auch unseren [Artikel zur Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) für viel mehr Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen, spezifischen Problemen der mobilen Zugänglichkeit und deren Überwindung geboten. Wir haben Sie auch durch die Nutzung der häufigsten Bildschirmleser geführt, um Sie bei der Zugänglichkeitstests zu unterstützen.

## Siehe auch

- [Richtlinien für die Entwicklung mobiler Websites](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken des mobilen Webdesigns behandeln.
- [Machen Sie Ihre Website fit für Touch-Geräte](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Nutzung von Touch-Ereignissen, um Interaktionen auf mobilen Geräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
