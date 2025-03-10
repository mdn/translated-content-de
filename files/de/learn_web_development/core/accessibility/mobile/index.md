---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web auf mobilen Geräten so beliebt ist und bekannte Plattformen wie iOS und Android vollumfängliche Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobile-spezifische Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis für Barrierefreiheitsprobleme hinter einigen Arten von Ereignissen.</li>
          <li>Spezielle Techniken für benutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Kenntnis darüber, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Zustand der Barrierefreiheit – und im Allgemeinen die Unterstützung von Webstandards – ist bei modernen mobilen Geräten gut. Die Zeiten sind längst vorbei, in denen mobile Geräte komplett andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser-Erkennung zu verwenden und ihnen völlig separate Seiten anzubieten (obwohl viele Unternehmen immer noch die Nutzung von mobilen Geräten erkennen und ihnen eine separate mobile Domain bereitstellen).

Heutzutage können mobile Geräte in der Regel voll ausgestattete Websites verarbeiten, und die wichtigsten Plattformen haben sogar eingebaute Screenreader, die es sehbehinderten Nutzern ermöglichen, sie erfolgreich zu nutzen. Moderne mobile Browser tendieren auch dazu, gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) zu haben.

Um eine Website auf mobilen Geräten barrierefrei und nutzbar zu machen, müssen Sie lediglich allgemeine Best Practices für gutes Webdesign und Barrierefreiheit befolgen.

Es gibt einige Ausnahmen, die besondere Berücksichtigung für mobile Geräte erfordern; die Hauptpunkte sind:

- Steuermechanismen — Stellen Sie sicher, dass Steuerelemente wie Tasten auf Mobilgeräten (d.h. hauptsächlich Touchscreen) sowie Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingabe — Machen Sie die Anforderungen an Benutzereingaben auf Mobilgeräten so schmerzfrei wie möglich (z.B. in Formularen, halten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownload-Größen sparen und die Bereitstellung von Bildern für hochauflösende Bildschirme in Betracht ziehen.

## Zusammenfassung der Screenreader-Tests auf Android und iOS

Die gebräuchlichsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren größtenteils wie Desktop-Screenreader, werden jedoch hauptsächlich mit Touch-Gesten anstelle von Tastenkombinationen bedient.

Werfen wir einen Blick auf die beiden Hauptscreenreader: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, suchen Sie nach dem Telefonmodell und der Android-Version und dann nach dem TalkBack-Menü. Es unterscheidet sich oft stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z.B. Samsung) haben in neueren Telefonen TalkBack nicht mehr und verwenden stattdessen ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack einzuschalten. Folgen Sie allen zusätzlichen Bildschirmaufforderungen, die Ihnen präsentiert werden.

Wenn TalkBack eingeschaltet ist, funktionieren die grundlegenden Steuerungen Ihres Android-Geräts ein wenig anders. Zum Beispiel:

1. Einmaliges Tippen auf eine App wählt sie aus und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts bewegt man sich zwischen Apps oder Tasten/Steuerelementen, wenn man sich in einer Steuerleiste befindet. Das Gerät liest jede Option vor.
3. Doppeltippen an irgendeiner Stelle öffnet die App/wählt die Option aus.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm gedrückt und ziehen Sie ihn herum, und Ihr Gerät wird die verschiedenen Apps/Elemente vorlesen, über die Sie hinwegfahren.

Wenn Sie TalkBack ausschalten möchten:

1. Kehren Sie zum TalkBack-Menübildschirm zurück (verwenden Sie die derzeit aktivierten unterschiedlichen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen diesen wechseln, indem Sie zwei Finger nach links und rechts wischen.

Für eine vollständigere Liste der TalkBack-Gesten siehe [Verwenden Sie TalkBack-Gesten](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons etwas anders.

Sie können einen Zwei-Finger-Wisch von unten über den Sperrbildschirm nach oben machen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts eingerichtet haben, werden Sie dann auf den entsprechenden Eingabebildschirm weitergeleitet, um ihn einzugeben.

Sie können auch durch Berührung erkunden, um die _Entsperren_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht es Ihnen, globale und lokale Kontextmenüs aufzurufen, wo immer Sie sich auf dem Gerät befinden. Ersteres bietet globale Optionen, die sich auf das gesamte Gerät beziehen, während letzteres Optionen bietet, die sich nur auf die aktuelle App/den aktuellen Bildschirm beziehen, in dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Für Details zu allen Optionen unter den globalen und lokalen Kontextmenüs siehe [Verwenden Sie globale und lokale Kontextmenüs](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, um Webseiten nur mit den Überschriften, Formularsteuerungen oder Links zu navigieren oder Zeile für Zeile zu navigieren usw.

Zum Beispiel mit aktiviertem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen haben, und lassen Sie dann Ihren Finger los, um es zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zu Ihrer _Einstellungen_-App und wählen _Barrierefreiheit > VoiceOver_. Drücken Sie den VoiceOver-Schieberegler, um es zu aktivieren (Sie werden auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver sehen).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter "_Einstellungen_-App > _Allgemein_ > _Barrierefreiheit_ > _VoiceOver_".

Ist VoiceOver aktiviert, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Ein einmaliges Tippen bewirkt, dass das von Ihnen getippte Element ausgewählt wird. Ihr Gerät spricht das Element, auf das Sie getippt haben.
2. Sie können auch durch Wischen nach links und rechts zwischen den Elementen auf dem Bildschirm navigieren oder indem Sie Ihren Finger auf dem Bildschirm bewegen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger anheben, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — zum Beispiel ein Foto machen, während Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Barrierefreiheit > VoiceOver_ unter Verwendung der oben genannten Gesten und schalten Sie den VoiceOver-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie den Home-Button drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode eingerichtet haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben beschrieben) und dann doppelt tippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Die Rotor-Funktion verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, die es Ihnen ermöglicht, schnell aus einer Reihe von gängigen nützlichen Optionen zu wählen. Um es zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm, als ob Sie ein Zifferblatt drehen würden. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können hin- und hergehen, um durch die Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es eine Option ist, für die Sie den Wert ändern können (wie Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die unter dem Rotor verfügbaren Optionen sind kontextsensitiv — sie unterscheiden sich je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Probieren wir das Surfen im Web mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppelt tippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen haben, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es zu tippen.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element durch Doppeltippen auswählen (z.B. einem Link folgen).
5. Standardmäßig ist die ausgewählte Rotor-Option die Sprechgeschwindigkeit; derzeit können Sie nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger im Uhrzeigersinn über den Bildschirm, um den Rotor zu öffnen und zwischen den Optionen zu wechseln. Hier sind einige Beispiele für verfügbare Optionen:

   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen den Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen Formularkontrollen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine vollständigere Referenz, die die verfügbaren VoiceOver-Gesten und weitere Tipps zur Barrierefreiheitsprüfung auf iOS abdeckt, siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuermechanismen

In unserem Artikel zu CSS und JavaScript zur Barrierefreiheit haben wir uns mit der Idee von Ereignissen befasst, die für eine bestimmte Art von Steuermechanismus spezifisch sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung, diese verursachen Barrierefreiheitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Als Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis, was die Barrierefreiheit angeht, gut – ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf dem der Handler festgelegt ist, durch tabben zu diesem hin und durch Drücken von Enter/Return oder durch Tippen darauf auf einem Touchscreen-Gerät aufgerufen werden. Versuchen Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html)-Beispiel ([sehen Sie es live laufen](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu sehen, was wir meinen.

Im Gegensatz dazu erzeugen Maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) Probleme – ihre Ereignishandler können nicht mit nicht-Maus-Steuerungen aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) ([siehe Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html))-Beispiel mit einer Tastatur oder einer Berührung zu steuern, werden Sie das Problem sehen. Dies tritt auf, weil wir Code verwenden wie den folgenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Steuerungsformen zu ermöglichen, müssen Sie verschiedene, aber gleichwertige Ereignisse verwenden – zum Beispiel funktionieren Berührungsereignisse auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie man Maus- und Berührungsevents zusammen verwendet — siehe [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([siehe das Beispiel auch live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, wie man unterschiedliche Steuermechanismen implementiert, unter [Implementierung von Spiele-Steuermechanismen](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, abhängig von Faktoren wie Bildschirmgröße und -auflösung, sodass sie für Benutzer unterschiedlicher Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte angegangen werden müssen, sind:

- Eignung von Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Sparen von Bildgrößen beim Download. Im Allgemeinen benötigen Geräte mit kleinen Bildschirmen keine so großen Bilder wie ihre Desktop-Gegenstücke und sie sind eher auf langsamen Netzwerkverbindungen. Daher ist es ratsam, kleineren Bildschirmgeräten entsprechend kleinere Bilder zu liefern. Sie können dies mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Responsive_images) handhaben.
- Überlegungen zu hohen Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit das Display scharf und klar bleibt. Wiederum können Sie Bilder entsprechend mit responsiven Bildtechniken liefern. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorbildformat erfüllt werden, das heute von Browsern gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt unabhängig von der angezeigten Größe scharf (siehe [Einschließen von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über responsive Design-Techniken führen, da diese an anderer Stelle auf MDN behandelt werden (siehe die obigen Links).

### Spezifische mobile Überlegungen

Es gibt weitere wichtige Themen, die berücksichtigt werden müssen, wenn man Webseiten auf mobilen Geräten zugänglicher machen möchte. Wir haben hier einige aufgeführt, aber wir werden mehr hinzufügen, wenn wir daran denken.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, das Zoomen zu deaktivieren. Stellen Sie immer sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten, wenn möglich, niemals `user-scalable=no` setzen — viele Menschen sind auf das Zoomen angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen das UI zerstören könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie das Zoomen deaktivieren müssen, sollten Sie eine andere Art von Äquivalent bereitstellen, z.B. eine Steuerung zum Vergrößern der Textgröße auf eine Weise, die Ihre UI nicht zerstört.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol oben auf dem Display zu verkleinern — das nur durch Drücken enthüllt wird, wenn es benötigt wird — wenn die Site auf einem Mobilgerät angesehen wird. Dies wird häufig durch ein "drei horizontale Linien"-Symbol dargestellt, und das Muster des Designs ist folglich als "Hamburger-Menü" bekannt.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass die Steuerung zur Anzeige barrierefrei über geeignete Steuerungsmechanismen (normalerweise Berührung für mobile Geräte), wie in [Steuermechanismen](#steuermechanismen) oben besprochen, ist, und dass der Rest der Seite während des Zugriffs auf das Menü aus dem Weg verschoben oder auf irgendeine Weise versteckt wird, um Verwirrung beim Navigieren zu vermeiden.

Hier klicken für ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten neigen Benutzer dazu, die Eingabe von Daten als lästiger zu empfinden als die entsprechende Erfahrung auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mit einer Desktop- oder Laptop-Tastatur als mit einer virtuellen Tastatur auf dem Touchscreen oder einer winzigen physischen Tastatur auf einem Mobilgerät einzugeben.

Aus diesem Grund lohnt es sich, die Menge an erforderlicher Tipperei so gering wie möglich zu halten. Als Beispiel, anstatt Benutzer dazu zu bringen, ihre Berufsbezeichnung jedes Mal in ein reguläres Texteingabefeld einzugeben, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz bei der Dateneingabe hilft) und eine "Andere"-Option anbieten, die ein Textfeld anzeigt, in das jegliche Ausreißer eingetragen werden können. Sie können ein einfaches Beispiel für diese Idee in Aktion in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (siehe das [common jobs example live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)) sehen.

Es lohnt sich auch, den Einsatz von HTML-Formular-Eingabetypen wie dem Datum auf mobilen Plattformen in Betracht zu ziehen, da diese gut verarbeitet werden – sowohl Android als auch iOS zeigen beispielsweise benutzerfreundliche Widgets an, die gut in das Gerätelebnis passen. Sehen Sie sich [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) für einige Beispiele an (siehe die [HTML5 form examples live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — versuchen Sie, diese auf mobilen Geräten zu laden und zu manipulieren. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswahlmöglichkeiten für die Auswahl von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie immer noch anderes Markup an Ihre mobilen Geräte über Feature-Erkennung bereitstellen. Schauen Sie sich unseren [Artikel zur Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für weitere Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details über häufige mobile spezifische Barrierefreiheit mehr Probleme und wie man sie überwindet, gegeben. Außerdem haben wir Ihnen die Nutzung der häufigsten Screenreader gezeigt, um Ihnen beim Testen auf Barrierefreiheit zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign behandeln.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Berührungsereignissen, um Interaktionen auf mobilen Geräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
