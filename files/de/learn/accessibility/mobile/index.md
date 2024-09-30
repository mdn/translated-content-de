---
title: Mobile accessibility
slug: Learn/Accessibility/Mobile
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

Da der Zugriff auf das Web über mobile Geräte so populär ist und bekannte Plattformen wie iOS und Android umfassende Barrierefreiheits-Tools bieten, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet speziellere Überlegungen zur Barrierefreiheit auf mobilen Geräten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel in diesem Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis für die Probleme mit Barrierefreiheit auf mobilen Geräten zu erlangen und Wege aufzuzeigen, diese zu überwinden.
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung für Webstandards im Allgemeinen — ist bei modernen mobilen Geräten gut. Die Zeiten sind vorbei, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler gezwungen waren, Browser-Erkennung zu nutzen und völlig separate Webseiten bereitzustellen (obwohl durchaus noch einige Unternehmen die Nutzung von mobilen Geräten erkennen und ihnen eine separate Mobil-Domain anbieten).

Heutzutage können mobile Geräte normalerweise voll funktionsfähige Websites handhaben, und die Hauptplattformen haben sogar Screenreader integriert, um sehbehinderten Benutzern die erfolgreiche Nutzung zu ermöglichen. Moderne mobile Browser haben tendenziell auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und nutzbar zu machen, müssen Sie nur allgemeine gute Webdesign- und Barrierefreiheit-Praktiken befolgen.

Es gibt einige Ausnahmen, die besondere Berücksichtigung erfordern; die Hauptpunkte sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Steuerelemente wie Schaltflächen auf Mobilgeräten (d.h. hauptsächlich Touchscreen) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie die Anforderungen an die Benutzereingabe auf mobilen Geräten so schmerzlos wie möglich (z.B. in Formularen, verhalten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bildgrößen im Download beschränkt werden und denken Sie über die Bereitstellung von Bildern für hochauflösende Bildschirme nach.

## Zusammenfassung des Screenreader-Tests auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren weitgehend wie Desktop-Screenreader, außer dass sie überwiegend über Touch-Gesten und nicht über Tastenkombinationen bedient werden.

Schauen wir uns die beiden Hauptvertreter an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack Screenreader ist im Android-Betriebssystem integriert.

Um ihn einzuschalten, recherchieren Sie, welches Telefonmodell und welche Android-Version Sie haben, und suchen Sie dann, wo das TalkBack-Menü ist. Dies kann je nach Android-Version und sogar zwischen verschiedenen Telefonmodellen stark variieren. Einige Telefonhersteller (z.B. Samsung) haben TalkBack bei neueren Telefonen nicht einmal, sondern haben sich stattdessen für ihren eigenen Screenreader entschieden.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack zu aktivieren. Folgen Sie den zusätzlichen Bildschirmanweisungen, die Ihnen angezeigt werden.

Wenn TalkBack aktiviert ist, sind die grundlegenden Steuerelemente Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Ein einfaches Antippen einer App wählt sie aus und das Gerät liest vor, um welche App es sich handelt.
2. Wischen Sie nach links und rechts, um zwischen Apps oder Tasten/Steuerelementen zu wechseln, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch Doppeltippen an einer beliebigen Stelle wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "erkunden durch Berühren" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie streichen.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (mit den derzeit aktivierten verschiedenen Gesten.)
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit durch ein gleichmäßiges Wischen nach oben und links zum Startbildschirm gelangen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen diesen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack aktiviert ist, funktioniert das Entsperren des Telefons etwas anders.

Sie können einen Zwei-Finger-Wisch vom unteren Rand des Sperrbildschirms durchführen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts eingestellt haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm, um es einzugeben.

Sie können auch durch Berühren erkunden, um die _Entsperren_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie globale und lokale Kontextmenüs aufrufen, unabhängig davon, wo Sie sich auf dem Gerät befinden. Ersteres bietet globale Optionen, die sich auf das gesamte Gerät beziehen, und letzteres bietet Optionen, die sich nur auf die aktuelle App/den Bildschirm beziehen, in dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Rufen Sie das globale Menü auf, indem Sie schnell nach unten und dann nach rechts wischen.
2. Rufen Sie das lokale Menü auf, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option zu wählen.

Alle Einzelheiten zu den Optionen, die in den globalen und lokalen Kontextmenüs verfügbar sind, finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Sie können das lokale Kontextmenü im Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur mit Überschriften, Formularsteuerelementen oder Links navigieren oder zeilenweise navigieren könnten.

Beispielsweise bei eingeschaltetem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Anzahl von Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erhalten, und lassen Sie Ihren Finger los, um es zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Weitere vollständige Dokumentation finden Sie unter [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zu Ihrer _Einstellungen-App_ und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einfaches Antippen bewirkt, dass das von Ihnen angeklickte Element ausgewählt wird; Ihr Gerät spricht das Element, das Sie angetippt haben, aus.
2. Sie können auch durch Wischen nach links und rechts zwischen den Elementen auf dem Bildschirm navigieren, oder indem Sie Ihren Finger über den Bildschirm schieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), doppeltippen Sie an einer beliebigen Stelle auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion durchzuführen — zum Beispiel ein Foto zu machen, während Sie sich in der Kamera-App befinden.

Um VoiceOver wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den obigen Gesten und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode eingerichtet haben, können Sie jede Zahl auswählen, indem Sie wischen/gleiten (wie oben beschrieben) und dann doppelt tippen, um jede Zahl einzugeben, wenn Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion zur Verfügung, die als Rotor bezeichnet wird und mit der Sie schnell aus einer Reihe nützlicher allgemeiner Optionen wählen können. So verwenden Sie ihn:

1. Drehen Sie Ihre Finger auf dem Bildschirm, als würden Sie ein Zifferblatt drehen. Jede Option wird laut vorgelesen, je weiter Sie sich drehen. Sie können hin- und hergehen, um die Optionen durchzugehen.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es eine Option ist, deren Wert Sie durchlaufen können (z.B. Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextsensitiv — sie variieren je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Lassen Sie uns das Web-Browsing mit VoiceOver ausprobieren:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Anzahl von Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erhalten, und lassen Sie Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es zu schreiben.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element durch Doppeltippen auswählen (z.B. einem Link folgen).
5. Standardmäßig wird die ausgewählte Rotor-Option die Sprechgeschwindigkeit sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger über den Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, wenn diese verfügbar sind.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Eine detailliertere Referenz, die die verfügbaren VoiceOver-Gesten sowie weitere Tipps zum Testen der Barrierefreiheit auf iOS behandelt, finden Sie in [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über Barrierefreiheit mit CSS und JavaScript haben wir die Idee von Ereignissen untersucht, die spezifisch für eine bestimmte Art von Steuerungsmechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung: Diese verursachen Barrierefreiheitsprobleme, da andere Steuerungsmechanismen die zugehörige Funktionalität nicht aktivieren können.

Ein Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis, das in Bezug auf Barrierefreiheit gut ist — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf das der Handler gesetzt ist, durch Tabben zu ihm und Drücken von Enter/Return oder durch Tippen auf einem Touchscreen-Gerät aufgerufen werden. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html)-Beispiel ([sehen Sie es live](/de/docs/Web/API/Element/mouseup_event) in Aktion) aus, um zu sehen, was wir meinen.

Andererseits schaffen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignishandler können nicht mit nicht-mausartigen Steuerungen aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html)-Beispiel ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html) in Aktion) mit einer Tastatur oder Touch zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsmöglichkeiten zu ermöglichen, müssen Sie verschiedene, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Touch-Ereignisse zusammen verwendet werden können — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie auch das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> [!NOTE]
> Komplett funktionierende Beispiele, die zeigen, wie man verschiedene Steuerungsmechanismen implementiert, finden Sie unter [Implementieren von Spielsteuerungsmechanismen](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, je nach Faktoren wie Bildschirmgröße und Auflösung, sodass sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere sind die häufigsten Probleme, die für mobile Geräte angegangen werden müssen:

- Eignung von Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können gelöst werden, indem man ein responsives Layout mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) erstellt.
- Konservierung der heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine Bilder, die so groß wie ihre Desktop-Gegenstücke sind, und sie sind eher mit langsamen Netzwerkverbindungen verbunden. Daher ist es ratsam, kleinere Bilder für schmale Bildschirme bereitzustellen, wenn geeignet. Sie können dies mit [Techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) handhaben.
- Denken an hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit das Display weiterhin scharf und klar aussieht. Auch hier können Sie Bilder entsprechend mit responsiven Bildtechniken bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektor-Bildformat erfüllt werden, das heute gut von Browsern unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der Größe, die angezeigt wird (siehe [Hinzufügen von Vektorgrafiken zum Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) für mehr Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Responsive-Design-Techniken anbieten, da sie an anderen Stellen in MDN behandelt werden (siehe die obigen Links).

### Spezifische mobile Überlegungen

Es gibt andere wichtige Themen, die berücksichtigt werden müssen, wenn man Seiten auf mobilen Geräten zugänglicher macht. Wir haben hier ein paar aufgelistet, werden aber weitere hinzufügen, sobald wir an sie denken.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn dies möglich ist — viele Menschen sind auf Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche beschädigen könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, sollten Sie eine andere gleichwertige Lösung bereitstellen, wie z.B. eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht beeinträchtigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol oben im Display zu verkleinern — das durch Drücken nur dann angezeigt wird, wenn es benötigt wird — wenn die Seite auf Mobilgeräten angesehen wird. Dies wird häufig durch ein "drei horizontale Linien"-Symbol dargestellt, und das Entwurfsmuster wird daher als "Hamburger-Menü" bezeichnet.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung, um es anzuzeigen, durch geeignete Steuermethoden (normalerweise Touch für Mobilgeräte) zugänglich ist, wie oben in [Steuerungsmechanismen](#steuerungsmechanismen) besprochen, und dass der Rest der Seite in irgendeiner Weise verschoben oder versteckt wird, während das Menü verwendet wird, um Verwirrung bei der Navigation zu vermeiden.

Klicken Sie hier für ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf mobilen Geräten ist die Eingabe von Daten tendenziell ärgerlicher für Benutzer als das äquivalente Erlebnis auf Desktop-Computern. Es ist bequemer, Texte in Formulareingaben mit einer Desktop- oder Laptop-Tastatur einzugeben, als mit einer virtuellen Bildschirmtastatur oder einer kleinen physischen mobilen Tastatur.

Aus diesem Grund ist es sinnvoll, die erforderlichen Eingaben zu minimieren. Beispielsweise könnten Sie statt der Benutzer, die jedes Mal ihre Berufsbezeichnung in ein reguläres Texteingabefeld eingeben lassen, stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option, die ein Texteingabefeld anzeigt, in das Ausreißer eingetragen werden können. Sie können ein einfaches Beispiel für diese Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) sehen (siehe das [common jobs example live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es lohnt sich auch, den Einsatz von HTML-Formular-Eingabetypen wie dem Datum auf mobilen Plattformen zu berücksichtigen, da sie gut damit umgehen — sowohl Android als auch iOS zeigen beispielsweise benutzerfreundliche Widgets an, die gut zum Gerät passen. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (siehe die [HTML5 form examples live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und sie zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen an, um Nummern/Telefonnummern einzugeben.
- Typen `time` und `date` zeigen geeignete Auswahlmöglichkeiten zum Auswählen von Zeiten und Daten an.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie immer noch anderes Markup an Ihre mobilen Geräte mit Feature-Erkennung senden. Sehen Sie [input types](https://diveinto.html5doctor.com/detect.html#input-types) für rohe Informationen zur Erkennung verschiedener Eingabetypen und werfen Sie auch einen Blick auf unseren [Artikel zur Merkmalserkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) für viele weitere Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen, mobilen, barrierefreiheitsspezifischen Problemen und möglichen Lösungen gegeben. Wir haben Sie auch durch die Verwendung der gängigsten Screenreader geführt, um Ihnen beim Testen der Barrierefreiheit zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Artikelliste in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign behandelt.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf mobilen Geräten zu ermöglichen.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
