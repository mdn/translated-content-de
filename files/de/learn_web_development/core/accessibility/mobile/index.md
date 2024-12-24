---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Webzugriff auf mobilen Geräten so populär ist und renommierte Plattformen wie iOS und Android umfassende Barrierefreiheitstools bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile spezifische Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie sie in vorherigen Lektionen des Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Vertrautheit mit Barrierefreiheitsproblemen bei einigen Arten von Ereignissen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Status der Barrierefreiheit — und die Unterstützung für Webstandards im Allgemeinen — ist bei modernen Mobilgeräten gut. Die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser nutzten und Entwickler gezwungen waren, Browser-Sniffing zu verwenden und ihnen völlig separate Websites anzubieten, sind längst vorbei (obwohl viele Unternehmen immer noch die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain bieten).

Heutzutage können Mobilgeräte in der Regel voll funktionsfähige Websites verarbeiten, und die Hauptplattformen haben sogar eingebaute Screenreader, um sehbehinderten Nutzern die Nutzung zu ermöglichen. Moderne mobile Browser tendieren ebenfalls dazu, eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu bieten.

Um eine Website auf mobilen Geräten zugänglich und benutzbar zu machen, müssen Sie lediglich allgemeinen guten Webdesign- und Best Practices zur Barrierefreiheit folgen.

Es gibt einige Ausnahmen, die spezielle Berücksichtigung für Mobilgeräte erfordern; die wichtigsten sind:

- Steuermechanismen — Stellen Sie sicher, dass Schnittstellensteuerungen wie Schaltflächen sowohl auf Mobilgeräten (d.h. hauptsächlich Touchscreen) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie Anforderungen an Benutzereingaben auf dem Mobilgerät so schmerzlos wie möglich (z.B. in Formularen, minimieren Sie das Tippen).
- Responsives Design — Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, Bilddownload-Größen gespart werden und denken Sie über die Bereitstellung von Bildern für hochauflösende Bildschirme nach.

## Zusammenfassung des Screenreader-Testens auf Android und iOS

Die gängigsten mobilen Plattformen haben voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, außer dass sie größtenteils durch Touch-Gesten anstatt durch Tastenkombinationen bedient werden.

Schauen wir uns die beiden Hauptscreenreader an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, suchen Sie nach Ihrem Telefonmodell und der Android-Version, die Sie haben, und dann, wo sich das TalkBack-Menü befindet. Es variiert stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z.B. Samsung) haben TalkBack nicht einmal in neueren Telefonen, sondern setzen auf ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack einzuschalten. Folgen Sie eventuell auftretenden zusätzlichen Bildschirmaufforderungen.

Wenn TalkBack eingeschaltet ist, sind die grundlegenden Steuerungen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Ein einfaches Tippen auf eine App wählt sie aus und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts bewegt man sich zwischen Apps oder Schaltflächen/Kontrollen, wenn man sich in einer Steuerungsleiste befindet. Das Gerät liest jede Option vor.
3. Durch Doppeltippen öffnet man die App/bzw. wählt die Option aus.
4. Sie können auch „durch Berührung erkunden“ — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn herum, und Ihr Gerät wird die verschiedenen Apps/Elemente vorlesen, über die Sie bewegt haben.

Möchten Sie TalkBack ausschalten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (mit den aktuell aktivierten unterschiedlichen Gesten.)
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um es auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer glatten Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie durch Wischen mit zwei Fingern nach links und rechts zwischen ihnen wechseln.

Für eine vollständigere Liste der TalkBack-Gesten, siehe [Verwendung von TalkBack-Gesten](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Bildschirmrand nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie dann zum entsprechenden Eingabebildschirm gebracht, um es einzugeben.

Sie können auch durch Berührung erkunden, um die Schaltfläche _Entsperren_ unten in der Mitte des Bildschirms zu finden und dann doppeltippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, unabhängig davon, wo Sie sich auf dem Gerät navigiert haben. Ersteres bietet globale Optionen in Bezug auf das gesamte Gerät und letzteres bietet Optionen in Bezug auf die aktuelle App/Bildschirm, in dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen verfügbaren Optionen unter den globalen und lokalen Kontextmenüs, siehe [Verwendung globaler und lokaler Kontextmenüs](https://support.google.com/accessibility/android/answer/6007066).

#### Durchsuchen von Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur mit den Überschriften, Formularsteuerungen oder Links navigieren können oder zeilenweise navigieren können usw.

Zum Beispiel mit eingeschaltetem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften hat, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie den gewünschten Charakter erhalten, und lassen Sie dann Ihren Finger los, um ihn zu schreiben. Wiederholen Sie dies für jeden Charakter.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer glatten Bewegung nach oben und rechts, um in das lokale Inhaltsmenü einzutreten.
6. Wischen Sie nach rechts, bis Sie die Option „Überschriften und Landmarken“ finden.
7. Doppeltippen Sie, um diese auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um in den Standardmodus zurückzukehren, betreten Sie das lokale Kontextmenü erneut, indem Sie nach oben und rechts wischen, wählen Sie „Standard“, und dann doppeltippen, um zu aktivieren.

> [!NOTE]
> Weitere vollständige Dokumentationen finden Sie unter [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=de&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zu Ihrer _Einstellungen_-App und wählen Sie _Eingabehilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (Sie sehen auch mehrere andere Optionen in Bezug auf VoiceOver auf dieser Seite).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü bei _Einstellungen-App > Allgemein > Eingabehilfen > VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsbewegungen von iOS ein wenig anders:

1. Ein einfaches Tippen wählt das Element aus, auf das Sie tippen; Ihr Gerät wird das Element sprechen, auf das Sie getippt haben.
2. Sie können auch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger auf dem Bildschirm hin- und herbewegen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das markierte Element zu aktivieren (z.B., eine ausgewählte App zu öffnen), doppelklicken Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — beispielsweise ein Foto aufnehmen, während Sie sich in der Kamera-App befinden.

Um es erneut auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Eingabehilfen > VoiceOver_ mit den oben genannten Gesten, und schalten Sie den _VoiceOver_-Schieber wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie den Home-Button drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben erklärt) und dann doppeltippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus einer Reihe nützlicher Optionen wählen können. Um ihn zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie ein Zifferblatt drehen. Jede Option wird laut vorgelesen, während Sie weiter drehen. Sie können vor- und zurückdrehen, um durch die Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie iterieren können (wie Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextsensitiv — sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Durchsuchen von Webseiten

Lassen Sie uns das Surfen im Internet mit VoiceOver probieren:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften hat, wie die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Für jeden Charakter halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie den gewünschten Charakter erhalten, und lassen Sie dann Ihren Finger los, um ihn auszuwählen. Doppeltippen Sie, um ihn zu schreiben.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links undrechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element doppeltippen, um es auszuwählen (z.B. einem Link folgen).
5. Standardmäßig wird die ausgewählte Rotoroption die Sprechgeschwindigkeit sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger um den Bildschirm wie ein Zifferblatt, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:

   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Bewegen Sie sich zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Formularsteuerungen_: Bewegen Sie sich zwischen Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, wenn diese verfügbar sind.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine umfassendere Referenz zu den verfügbaren VoiceOver-Gesten und andere Hinweise zum Testen der Barrierefreiheit auf iOS siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem CSS- und JavaScript-Barrierefreiheitsartikel haben wir die Idee von Ereignissen, die spezifisch für eine bestimmte Art von Steuermechanismus sind, behandelt (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung: Diese verursachen Barrierefreiheitsprobleme, weil andere Steuermechanismen die damit verbundene Funktionalität nicht aktivieren können.

Zum Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis in Bezug auf die Barrierefreiheit gut geeignet — ein damit verbundener Ereignis-Handler kann aktiviert werden, indem Sie auf das Element klicken, auf das der Handler eingestellt ist, es markieren und die Eingabetaste/Return drücken oder es auf einem Touchscreen-Gerät antippen. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([siehe es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Im Gegensatz dazu erzeugen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme — ihre Ereignis-Handler können nicht mit nicht-mausgesteuerten Steuerungen aktiviert werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([siehe Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) Beispiel mit einer Tastatur oder Berührung zu steuern, werden Sie das Problem sehen. Dies geschieht, weil wir den folgenden Code verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuermechanismen zu ermöglichen, müssen Sie unterschiedliche, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie man Maus- und Berührungsereignisse zusammen verwendet — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([siehe das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) ebenfalls).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, wie verschiedene Steuermechanismen implementiert werden, in [Implementierung von Spielsteuerungsmechanismen](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und -auflösung, damit sie für Benutzer unterschiedlicher Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte adressiert werden müssen, sind:

- Eignung von Layouts für mobile Geräte. Ein Mehrspaltenlayout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar bleibt. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Sparen der heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm nicht so große Bilder wie ihre Desktop-Pendants und sie sind eher auf langsamen Netzwerkverbindungen. Daher ist es ratsam, kleinere Bilder für schmale Bildschirme bereitzustellen, wo es angemessen ist. Sie können dies mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Responsive_images) handhaben.
- Nachdenken über hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher hochauflösendere Bilder, damit die Anzeige scharf und klar bleibt. Auch hier können Sie Bilder angemessen mit Techniken für responsive Bilder bereitstellen. Darüber hinaus können viele Bildanforderungen durch das SVG-Vektorbildformat erfüllt werden, das heute gut von Browsern unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der angezeigten Größe (siehe [Einbinden von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für mehr Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Techniken des responsiven Designs geben, da sie an anderen Stellen auf MDN behandelt werden (siehe die oben genannten Links).

### Spezifische mobile Überlegungen

Es gibt andere wichtige Punkte zu berücksichtigen, wenn Sie Websites auf mobilen Geräten zugänglicher machen. Wir haben hier ein paar aufgelistet, werden aber mehr hinzufügen, sobald sie uns einfallen.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts in das {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` setzen, wenn es irgendwie möglich ist — viele Menschen sind auf den Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es keine gute Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche beeinträchtigen könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, sollten Sie eine andere Art von Äquivalent bereitstellen, wie ein Steuerungselement zum Erhöhen der Textgröße auf eine Weise, die Ihr UI nicht zerstört.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr üblich, Media-Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol oben auf dem Display zu verkleinern — das nur angezeigt wird, wenn es benötigt wird —, wenn die Seite auf einem mobilen Gerät angesehen wird. Dies wird oft durch ein „drei horizontale Linien“-Symbol dargestellt, und das Designmuster ist folglich als „Hamburger-Menü“ bekannt.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass die Steuerung zum Anzeigen des Menüs durch geeignete Steuermechanismen zugänglich ist (normalerweise Touch für mobile Geräte), wie in [Steuermechanismen](#steuermechanismen) oben diskutiert, und dass der Rest der Seite beim Zugriff auf das Menü in irgendeiner Weise zur Seite geschoben oder verborgen wird, um Verwirrung beim Navigieren zu vermeiden.

Klicken Sie hier für ein [gutes Beispiel eines Hamburger-Menüs](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf Mobilgeräten ist die Eingabe von Daten in der Regel für die Benutzer störender als das entsprechende Erlebnis auf Desktopcomputern. Es ist bequemer, Text mit einer Desktop- oder Laptop-Tastatur in Formulareingaben einzugeben als mit einer Touchscreen-Virtuellen Tastatur oder einer winzigen mobilen physischen Tastatur.

Aus diesem Grund lohnt es sich, die Menge an notwendiger Tipperei zu minimieren. Als ein Beispiel: Anstatt Benutzer jedes Mal ihre berufliche Bezeichnung mit einer regulären Texteingabe ausfüllen zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den gebräuchlichsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine „Andere“-Option anbieten, die ein Textfeld anzeigt, in das eventuelle Ausreißer eingetragen werden können. Sie können ein einfaches Beispiel dieser Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (siehe das [Beispiel für gängige Jobarten live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)) sehen.

Es lohnt sich auch, die Verwendung von HTML-Formulartypen wie Datumsangaben auf mobilen Plattformen zu erwägen, da diese gut gehandhabt werden — sowohl Android als auch iOS zeigen zum Beispiel benutzerfreundliche Widgets, die gut zur Geräteerfahrung passen. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (sehen Sie die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese zu laden und sie auf Mobilgeräten zu manipulieren. Beispielsweise:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswahlmöglichkeiten für die Auswahl von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, können Sie immer noch unterschiedliches Markup an Ihre Mobilgeräte mithilfe von Feature-Erkennung ausliefern. Siehe [Eingabetypen](https://diveinto.html5doctor.com/detect.html#input-types) für allgemeine Informationen zur Erkennung verschiedener Eingabetypen, und auch unseren [Artikel zur Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für viel mehr Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen spezifischen Problemen der Barrierefreiheit auf Mobilgeräten und deren Überwindung gegeben. Wir haben Ihnen auch die Verwendung der am häufigsten verwendeten Screenreader nähergebracht, um Ihnen beim Testen der Barrierefreiheit zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_ über verschiedene Techniken im mobilen Webdesign.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf mobilen Geräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
