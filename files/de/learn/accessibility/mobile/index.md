---
title: Barrierefreiheit auf Mobilgeräten
slug: Learn/Accessibility/Mobile
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

Da der Webzugang auf Mobilgeräten so populär ist und renommierte Plattformen wie iOS und Android über vollwertige Barrierefreiheits-Tools verfügen, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet spezifische Barrierefreiheitsüberlegungen für Mobilgeräte.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Probleme hinsichtlich der Barrierefreiheit auf Mobilgeräten existieren und wie man sie überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Der Zustand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist bei modernen Mobilgeräten gut. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser nutzten und Entwickler dazu zwangen, Browser-Sniffing zu verwenden und ihnen komplett separate Websites zu bieten, sind schon lange vorbei (obwohl einige Unternehmen immer noch die Nutzung von Mobilgeräten erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können Mobilgeräte in der Regel voll funktionsfähige Websites bewältigen, und die wichtigsten Plattformen haben sogar Screenreader integriert, um sehbehinderten Benutzern die erfolgreiche Nutzung zu ermöglichen. Moderne mobile Browser tendieren ebenfalls dazu, gute Unterstützung für [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) zu bieten.

Um eine Website auf Mobilgeräten zugänglich und benutzerfreundlich zu machen, müssen Sie nur den allgemeinen besten Praktiken für Webdesign und Barrierefreiheit folgen.

Es gibt einige Ausnahmen, die speziell für Mobilgeräte beachtet werden müssen; die wichtigsten sind:

- Steuermechanismen — Stellen Sie sicher, dass Bedienungselemente wie Tasten sowohl auf Mobilgeräten (d. h. hauptsächlich Touchscreen) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Gestalten Sie Benutzereingaben auf Mobilgeräten möglichst schmerzfrei (z. B. in Formularen Eingabestrings minimieren).
- Responsives Design — Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, Bilddownload-Größen sparen und über die Bereitstellung von Bildern für hochauflösende Bildschirme nachdenken.

## Zusammenfassung der Screenreader-Tests auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren im Großen und Ganzen auf die gleiche Weise wie Desktop-Screenreader, werden jedoch weitgehend durch Touch-Gesten anstelle von Tastenkombinationen bedient.

Lassen Sie uns die beiden Hauptscreenreader betrachten: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, suchen Sie heraus, welches Telefonmodell und welche Android-Version Sie haben, und dann, wo sich das TalkBack-Menü befindet. Dies unterscheidet sich oft stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) haben in neueren Telefonen TalkBack nicht integriert und stattdessen eigenentwickelte Screenreader eingebaut.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack zu aktivieren. Folgen Sie dann den zusätzlichen Bildschirmanweisungen, die Ihnen angezeigt werden.

Wenn TalkBack aktiviert ist, sind die grundlegenden Bedienelemente Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Einmaliges Tippen auf eine App wählt sie aus, und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts können Sie zwischen Apps oder Tasten/Steuerelementen wechseln, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Ein Doppeltippen irgendwo öffnet die App/wählt die Option aus.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn umher, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie sich bewegen.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübilschirm (mithilfe der derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Eine vollständige Liste der TalkBack-Gesten finden Sie unter [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack aktiviert ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Ende des Sperrbildschirms nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie dann zum entsprechenden Eingabebildschirm weitergeleitet, um ihn einzugeben.

Sie können auch per Berührung nach der _Entsperren_-Taste am unteren Bildschirmrand suchen und dann doppelt tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht es Ihnen, auf globale und lokale Kontextmenüs zuzugreifen, egal wohin Sie auf dem Gerät navigiert haben. Erstere bieten globale Optionen, die sich auf das gesamte Gerät beziehen, und letztere bieten Optionen, die nur zur aktuellen App/den Bildschirm, auf dem Sie sich befinden, passen.

So gelangen Sie zu diesen Menüs:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die Option ausgewählt haben, die Sie möchten, doppeltippen Sie, um diese Option auszuwählen.

Details zu allen verfügbaren Optionen unter den globalen und lokalen Kontextmenüs finden Sie unter [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Im Webbrowser können Sie das lokale Kontextmenü verwenden, um Optionen zum Navigieren auf Webseiten nur mit den Überschriften, Formularsteuerelementen oder Links zu finden, oder Zeile für Zeile zu navigieren usw.

Zum Beispiel mit eingeschaltetem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften hat, wie z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen bekommen, und lassen Sie dann den Finger los, um es zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Sobald Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um ins lokale Kontextmenü zu gelangen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarks" finden.
7. Doppeltippen Sie, um sie auszuwählen. Nun können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarks zu wechseln.
8. Um zum Standardmodus zurückzukehren, geben Sie das lokale Kontextmenü erneut ein, indem Sie nach oben und rechts wischen, wählen Sie „Standard“ und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine umfassendere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um es zu aktivieren, gehen Sie zur _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, werden die grundlegenden Steuerungsgesten von iOS etwas anders sein:

1. Ein einzelnes Tippen bewirkt, dass das Element, auf das Sie tippen, ausgewählt wird; Ihr Gerät spricht das Element aus, das Sie angetippt haben.
2. Sie können auch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger auf dem Bildschirm verschieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), tippen Sie irgendwo auf dem Bildschirm doppelt.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — zum Beispiel ein Foto machen, wenn Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den oben genannten Gesten und schalten Sie den _VoiceOver_-Schieberegler zurück auf aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Starttaste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode eingerichtet haben, können Sie jede Zahl durch Wischen/Verschieben auswählen (wie oben beschrieben) und dann doppelt tippen, um jede Zahl einzugeben, wenn Sie die richtige gefunden haben.

#### Benutzung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus einer Reihe gängiger nützlicher Optionen wählen können. Um es zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm herum, als ob Sie ein Zifferblatt drehen. Jede Option wird laut vorgelesen, während Sie weiter drehen. Sie können hin und her gehen, um durch die Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie iterieren können (z.B. Lautstärke oder Sprechrate), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die über den Rotor verfügbaren Optionen sind kontextabhängig — sie unterscheiden sich je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Lassen Sie uns versuchen, mit VoiceOver im Web zu surfen:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften hat, wie z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen und dann doppelt tippen.
   - Für jedes Zeichen halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen bekommen und lassen Sie dann den Finger los, um es auszuwählen. Doppeltippen Sie, um es zu tippen.
   - Sobald Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppelt tippen, um es auszuwählen (z.B. einem Link zu folgen).
5. Standardmäßig wird die ausgewählte Rotor-Option Sprechrate sein; Sie können derzeit nach oben und unten wischen, um die Sprechrate zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger wie ein Zifferblatt über den Bildschirm, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Sprechrate_: Ändern Sie die Sprechrate.
   - _Behälter_: Wechseln Sie zwischen verschiedenen semantischen Behältern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen den Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen den Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls sie verfügbar sind.

7. Wählen Sie _Überschriften_. Nun können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine umfassendere Referenz, die die verfügbaren VoiceOver-Gesten und weitere Hinweise zur Barrierefreiheitstests auf iOS abdeckt, siehe [Apple's VoiceOver documentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem Artikel über CSS und JavaScript-Barrierefreiheit haben wir die Idee von Ereignissen erörtert, die spezifisch für einen bestimmten Steuermechanismustyp sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung, diese verursachen Barrierefreiheitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Ein Beispiel ist das [click](/de/docs/Web/API/Element/click_event) Ereignis, das in Bezug auf die Barrierefreiheit gut ist — ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf dem der Handler gesetzt ist, aktiviert werden, indem man es mit Tab erreicht und Enter/Return drückt, oder es auf einem Touchscreen-Gerät antippt. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu verstehen, was wir meinen.

Alternativ schaffen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — deren Ereignishandler können nicht mit nicht-maus-basierten Steuerungen aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) Beispiel (siehe [Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) mit Tastatur oder Touch zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir Code wie den folgenden verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie verschiedene, aber äquivalente Ereignisse verwenden — zum Beispiel funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie man Maus- und Touch-Ereignisse zusammen verwendet — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) (siehe [Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) auch).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, die zeigen, wie verschiedene Steuermechanismen implementiert werden können, bei [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Eigenschaften Ihrer Apps je nach Faktoren wie Bildschirmgröße und Auflösung dynamisch zu verändern, sodass sie für Benutzer von verschiedenen Gerätetypen verwendbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für Mobilgeräte berücksichtigt werden müssen, sind:

- Eignung der Layouts für Mobilgeräte. Ein mehrspaltiges Layout funktioniert beispielsweise nicht so gut auf einem schmalen Bildschirm, und die Schriftgröße muss eventuell erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelöst werden.
- Schonung von Bildgrößen beim Herunterladen. Kleine Bildschirme benötigen in der Regel keine so großen Bilder wie ihre Desktop-Gegenstücke, und sie sind eher mit langsamen Netzwerkverbindungen verbunden. Deshalb ist es ratsam, kleinere Bilder an Geräte mit schmalen Bildschirmen auszuliefern, wo sie angemessen sind. Sie können dies mit [responsiven Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) handhaben.
- Denken Sie an hohe Auflösungen. Viele Mobilgeräte haben hochauflösende Bildschirme und benötigen daher höher auflösende Bilder, damit die Anzeige weiterhin scharf und klar aussieht. Auch hier können Sie Bilder entsprechend mit responsiven Bildtechniken ausliefern. Darüber hinaus können viele Bildanforderungen erfüllt werden, indem das SVG-Vektorbildformat verwendet wird, das heute gut von Browsern unterstützt wird. SVG hat eine kleine Dateigröße und bleibt unabhängig von der angezeigten Größe scharf (siehe [Adding vector graphics to the web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Techniken des responsiven Designs liefern, da diese an anderen Stellen auf MDN behandelt werden (siehe die oben genannten Links).

### Spezifische Überlegungen für Mobilgeräte

Es gibt weitere wichtige Punkte zu beachten, wenn Sie Webseiten auf Mobilgeräten barrierefreier gestalten. Wir haben hier ein paar aufgelistet, werden aber mehr hinzufügen, wenn uns welche einfallen.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` einstellen, wenn es irgendwie möglich ist — viele Menschen sind darauf angewiesen, den Inhalt Ihrer Website vergrößern zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. In einigen Situationen kann das Zoomen die Benutzeroberfläche zerstören; in solchen Fällen, wenn es notwendig erscheint, den Zoom zu deaktivieren, sollten Sie eine andere Art eines Äquivalents bereitstellen, wie eine Kontrolle zur Erhöhung der Schriftgröße auf eine Weise, die Ihre Benutzeroberfläche nicht zerstört.

#### Menüs zugänglich halten

Da der Bildschirm von Mobilgeräten viel schmaler ist, ist es sehr häufig, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü zu einem kleinen Symbol oben auf dem Display schrumpfen zu lassen — das nur gedrückt werden kann, um das Menü anzuzeigen, wenn es benötigt wird — wenn die Website auf Mobilgeräten betrachtet wird. Dies wird oft durch ein Symbol mit "drei horizontalen Linien" dargestellt, und das Designmuster wird daher als "Hamburger-Menü" bezeichnet.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Kontrolle, um es anzuzeigen, durch geeignete Steuermechanismen zugänglich ist (normalerweise Touch für Mobilgeräte), wie in [Steuermechanismen](#steuermechanismen) oben besprochen, und dass der Rest der Seite aus dem Weg geräumt oder in irgendeiner Weise versteckt wird, während auf das Menü zugegriffen wird, um Verwirrung bei der Navigation zu vermeiden.

Hier ist ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf Mobilgeräten neigt die Eingabe von Daten dazu, für Benutzer lästiger zu werden als die gleiche Erfahrung auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mit einer Desktop- oder Laptop-Tastatur einzugeben, als mit einer virtuellen Touchscreen-Tastatur oder einer winzigen mobilen physischen Tastatur.

Aus diesem Grund ist es sinnvoll, die Menge der benötigten Eingaben zu minimieren. Zum Beispiel, anstatt Benutzer jedes Mal ihre Berufsbezeichnung in ein reguläres Texteingabefeld eingeben zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}} Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz bei der Dateneingabe hilft) und eine "Andere" Option anbieten, die ein Textfeld anzeigt, um alle Ausreißer einzugeben. Sie sehen ein einfaches Beispiel dieser Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (sehen Sie [Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es lohnt sich auch, die Verwendung von HTML-Formular-Eingabetypen wie Datum auf Mobilplattformen zu erwägen, da diese gut damit umgehen können — sowohl Android als auch iOS zeigen benutzerfreundliche Widgets an, die gut mit der Geräteerfahrung harmonieren. Siehe [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele (sehen Sie [HTML5-Formular-Beispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese zu laden und auf Mobilgeräten zu manipulieren. Zum Beispiel:

- Typen `number`, `tel`, und `email` zeigen geeignete virtuelle Tastaturen zur Eingabe von Zahlen/Telefonnummern an.
- Typen `time` und `date` zeigen geeignete Picker an, um Zeiten und Daten auszuwählen.

Wenn Sie eine andere Lösung für Desktops anbieten möchten, können Sie Ihren mobilen Geräten immer andere Auszeichnungen durch Feature-Erkennung bereitstellen. Siehe [input types](https://diveinto.html5doctor.com/detect.html#input-types) für Rohinformationen zur Erkennung verschiedener Eingabetypen und sehen Sie sich auch unseren [Feature-Erkennung-Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) für viel mehr Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details über allgemeine mobilgerätespezifische Barrierefreiheitsprobleme und wie man sie überwindet gegeben. Wir haben Sie auch durch die Nutzung der am häufigsten verwendeten Screenreader geführt, um Ihnen bei der Barrierefreiheitstests zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign abdecken.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über den Gebrauch von Touch-Ereignissen, um Interaktionen auf Mobilgeräten zu aktivieren.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}
