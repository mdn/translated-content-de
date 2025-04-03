---
title: Mobile Barrierefreiheit
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Webzugang auf mobilen Geräten so populär ist und renommierte Plattformen wie iOS und Android umfassende Barrierefreiheitstools bieten, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel befasst sich mit mobil-spezifischen Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie sie in früheren Lektionen des Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis für Barrierefreiheitsprobleme, die bei bestimmten Arten von Ereignissen auftreten.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser spezifische Bedienvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Status der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist auf modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten, sind lange vorbei. Entwickler mussten damals Browser-Sniffing einsetzen und ihnen völlig separate Websites anbieten (obwohl einige Firmen immer noch die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können mobile Geräte in der Regel voll funktionsfähige Websites anzeigen, und die Hauptplattformen haben sogar integrierte Screenreader, um sehbehinderten Nutzern die Nutzung zu erleichtern. Moderne mobile Browser unterstützen in der Regel auch gut [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und nutzbar zu machen, müssen Sie lediglich allgemeine Best Practices für gutes Webdesign und Barrierefreiheit befolgen.

Es gibt einige Ausnahmen, die auf mobilen Geräten besondere Beachtung finden müssen; die Hauptpunkte sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Steuerelemente wie Schaltflächen auf mobilen Geräten (d.h. hauptsächlich auf Touchscreens) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie die Anforderungen an Benutzereingaben auf mobilen Geräten so einfach wie möglich (z.B. in Formularen; halten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bildgrößen beim Herunterladen erhalten bleiben und dass Bilder für hochauflösende Bildschirme bereitgestellt werden.

## Zusammenfassung der Screenreader-Tests auf Android und iOS

Die gängigsten mobilen Plattformen haben voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, mit der Ausnahme, dass sie hauptsächlich mit Touch-Gesten anstelle von Tastenkombinationen bedient werden.

Schauen wir uns die beiden Hauptscreenreader an: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, suchen Sie nach Ihrem Telefonmodell und Ihrer Android-Version und dann nach dem Standort des TalkBack-Menüs. Es variiert stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z.B. Samsung) haben TalkBack in neueren Telefonen überhaupt nicht integriert und verwenden stattdessen ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack zu aktivieren. Folgen Sie allen zusätzlichen Eingabeaufforderungen auf dem Bildschirm.

Wenn TalkBack aktiviert ist, sind die Grundfunktionen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Durch einfaches Tippen auf eine App wird diese ausgewählt, und das Gerät wird den Namen der App vorlesen.
2. Durch Wischen nach links und rechts bewegen Sie sich zwischen Apps oder Schaltflächen/Steuerelementen, falls Sie sich in einer Steuerleiste befinden. Das Gerät liest jedes Menüoption vor.
3. Durch Doppeltippen öffnen Sie die App/ausgewählte Option.
4. Sie können auch mittels "Berührung erforschen" den Bildschirm erkunden – halten Sie Ihren Finger auf den Bildschirm und ziehen Sie ihn daraufhin über den Bildschirm, damit Ihr Gerät die verschiedenen Programme/Elemente, über die Sie bewegen, vorliest.

Wenn Sie TalkBack deaktivieren möchten:

1. Navigieren Sie zurück zum TalkBack-Menü (unter Verwendung der derzeit aktivierten Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um es zu deaktivieren.

> [!NOTE]
> Sie gelangen jederzeit zu Ihrem Startbildschirm, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie durch Wischen mit zwei Fingern nach links und rechts zwischen diesen wechseln.

Eine umfassendere Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack aktiviert ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Rand des Sperrbildschirms nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts eingerichtet haben, werden Sie anschließend zur entsprechenden Eingabemaske weitergeleitet.

Sie können auch mit Berührung erkunden, um die _Entsperrungs_-Schaltfläche unten in der Mitte des Bildschirms zu finden, und dann doppelt darauf tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht den Zugriff auf globale und lokale Kontextmenüs überall dort, wo Sie sich auf dem Gerät befinden. Erstere bieten globale Optionen in Bezug auf das gesamte Gerät, letztere bieten Optionen in Bezug auf die aktuelle App/den aktuellen Bildschirm, in dem Sie sich befinden.

So gelangen Sie zu diesen Menüs:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Weitere Details zu allen im globalen und lokalen Kontextmenü verfügbaren Optionen finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, um Webseiten nur mit Überschriften, Formularelementen oder Links zu durchsuchen oder zeilenweise zu navigieren usw.

Zum Beispiel, wenn TalkBack aktiviert ist:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie diese erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie den gewünschten Buchstaben erreicht haben, und lassen Sie Ihren Finger los, um ihn einzugeben. Wiederholen Sie den Vorgang für jeden Buchstaben.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü zu öffnen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Markierungen" finden.
7. Doppeltippen Sie, um diese auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Markierungen zu wechseln.
8. Um zum Standardmodus zurückzukehren, öffnen Sie das lokale Kontextmenü erneut, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Eine ausführlichere Dokumentation finden Sie unter [Android mit TalkBack starten](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um ihn zu aktivieren, gehen Sie zur _Einstellungen_-App und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um ihn zu aktivieren (Sie werden auf dieser Seite auch mehrere andere Optionen im Zusammenhang mit VoiceOver sehen).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_.

Sobald VoiceOver aktiviert ist, sind die grundlegenden Steuerungsgesten von iOS etwas anders:

1. Einmaliges Tippen wählt das Element aus, auf das Sie tippen; Ihr Gerät spricht das von Ihnen angetippte Element aus.
2. Sie können die Elemente auf dem Bildschirm auch durch Wischen nach links und rechts durchsuchen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger auf dem Bildschirm verschieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger heben, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um sich durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextabhängige Aktion auszuführen - z.B. ein Foto aufnehmen, während Sie sich in der Kamera-App befinden.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ mit den oben genannten Gesten und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Entsperren des Telefons

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder streichen) wie gewohnt. Wenn ein Zugangscode eingestellt ist, können Sie jede Zahl durch Wischen/Schieben auswählen (wie oberhalb erklärt) und dann doppeltippen, um jede Zahl einzugeben, sobald Sie die richtige gefunden haben.

#### Verwendung des Rotors

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, die es Ihnen ermöglicht, schnell aus einer Reihe gängiger, nützlicher Optionen zu wählen. Um es zu verwenden:

1. Drehen Sie zwei Finger auf dem Bildschirm, als ob Sie einen Drehknopf betätigen würden. Jede Option wird laut vorgelesen, während Sie sich weiter drehen. Sie können vor- und zurückdrehen, um zwischen den Optionen zu wechseln.
2. Sobald Sie die gewünschte Option gefunden haben:

   - Lassen Sie Ihre Finger los, um es auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert veränderbar ist (z.B. Lautstärke oder Sprechgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextbezogen - sie unterscheiden sich, je nachdem, in welcher App oder Ansicht Sie sich befinden (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Probieren wir das Browsen von Websites mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die viele Überschriften enthält, z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:

   - Wählen Sie die URL-Leiste durch Wischen nach links/rechts, bis Sie dort ankommen, und dann doppeltippen.
   - Für jeden Buchstaben, halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie den gewünschten Buchstaben erreichen, und lassen Sie dann Ihren Finger los, um ihn auszuwählen. Doppeltippen Sie, um ihn zu tippen.
   - Wenn Sie fertig sind, suchen Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element doppelt antippen, um es auszuwählen (z.B. einem Link zu folgen).
5. Standardmäßig wird die im Rotor ausgewählte Option die Sprechgeschwindigkeit sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger wie ein Wahlrad auf dem Bildschirm, um den Rotor anzuzeigen und sich durch die Optionen zu bewegen. Hier sind einige Beispiele der verfügbaren Optionen:

   - _Sprechgeschwindigkeit_: Ändern Sie die Sprachgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Formularsteuerungen_: Wechseln Sie zwischen Formularsteuerungen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls verfügbar.

7. Wählen Sie _Überschriften_. Nun können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Eine umfassendere Referenz, die die verfügbaren VoiceOver-Gesten und weitere Hinweise zum Testen der Barrierefreiheit auf iOS abdeckt, finden Sie in [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über CSS und JavaScript Barrierefreiheit haben wir das Konzept von Ereignissen betrachtet, die spezifisch für einen bestimmten Steuerungsmechanismus sind (siehe [Nur-Maus-Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Diese verursachen Barrierefreiheitprobleme, da andere Steuerungsmechanismen die damit verbundene Funktionalität nicht aktivieren können.

Beispielsweise ist das [click](/de/docs/Web/API/Element/click_event) Ereignis in Bezug auf Barrierefreiheit gut – ein zugehöriger Event-Handler kann durch Klicken auf das Element, zu dem der Handler gesetzt ist, durch Tabben darauf und Drücken von Enter/Return oder durch Antippen auf einem Touchscreen-Gerät aufgerufen werden. Probieren Sie unser [simple-button-example.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-button-example.html) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)), um zu verstehen, was wir meinen.

Alternativ führen maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) zu Problemen — deren Event-Handler können mit nicht-mausgesteuerten Steuerungen nicht aufgerufen werden.

Wenn Sie versuchen, unser [simple-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/simple-box-drag.html) Beispiel ([sehen Sie das Beispiel live](https://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) mit Tastatur oder Touch zu steuern, werden Sie das Problem feststellen. Das tritt auf, weil wir Code wie folgt verwenden:

```js
div.onmousedown = () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
};

document.onmouseup = stopMove;
```

Um andere Formen der Steuerung zu ermöglichen, müssen Sie andere, aber gleichwertige Ereignisse verwenden – z.B. funktionieren Touchevents auf Touchscreen-Geräten:

```js
div.ontouchstart = (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
};

panel.ontouchend = stopMove;
```

Wir haben ein einfaches Beispiel bereitgestellt, das zeigt, wie Maus- und Touchevents zusammen verwendet werden können — sehen Sie [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/multi-control-box-drag.html) ([sehen Sie das Beispiel auch live](https://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html)).

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele sehen, wie verschiedene Steuerungsmechanismen implementiert werden können, unter [Implementierung von Steuerungsmechanismen für Spiele](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch zu ändern, basierend auf Faktoren wie Bildschirmgröße und -auflösung, damit sie für Benutzer verschiedener Gerätetypen brauchbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die für mobile Geräte gelöst werden müssen, sind:

- Eignung der Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit er lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mithilfe von Technologien wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries), [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Erhaltung der Bildgrößen beim Herunterladen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Gegenstücke, und sie sind eher auf langsamen Netzwerkverbindungen. Es ist daher ratsam, kleinere Bilder an Geräte mit schmalem Bildschirm zu senden, falls dies zutrifft. Sie können dies mit [responsiven Bildtechniken](/de/docs/Web/HTML/Responsive_images) handhaben.
- Achten auf hohe Auflösung. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher hochauflösende Bilder, damit die Anzeige weiterhin scharf und klar aussieht. Auch hier können Sie mit responsiven Bildtechniken Bilder je nach Bedarf bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorbilderformat erfüllt, das heute gut in Browsern unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig davon, in welcher Größe es angezeigt wird (siehe [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion über Responsive-Design-Techniken führen, da sie an anderen Stellen auf MDN behandelt werden (siehe oben für Links).

### Spezifische mobile Überlegungen

Es gibt weitere wichtige Probleme zu beachten, wenn Sie Websites auf mobilen Geräten zugänglicher machen. Wir haben ein paar hier aufgelistet, aber wir werden mehr hinzufügen, wenn wir welche entdecken.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass das Vergrößern aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten `user-scalable=no` nach Möglichkeit niemals festlegen – viele Menschen sind auf den Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können. Diese Funktionalität zu entfernen ist eine sehr schlechte Idee. In bestimmten Situationen kann es vorkommen, dass das Zoomen die Benutzeroberfläche zerstört; in solchen Fällen, falls Sie den Zoom deaktivieren möchten, sollten Sie eine andere Art von Äquivalent bereitstellen, wie eine Steuerung zur Erhöhung der Textgröße in einer Weise, die nicht Ihre Benutzeroberfläche beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr verbreitet, Medienabfragen und andere Technologien zu verwenden, um das Navigationsmenü so weit zu verkleinern, dass es zu einem kleinen Symbol oben im Display schrumpft — das nur bei Bedarf aufgerufen werden kann — wenn die Website auf einem mobilen Gerät angezeigt wird. Dies wird häufig durch ein "drei horizontale Linien"-Symbol dargestellt, und das Designmuster ist daher als "Hamburger-Menü" bekannt.

Wenn Sie ein solches Menü implementieren, müssen Sie sicherstellen, dass die Steuerung zum Anzeigen des Menüs durch geeignete Steuerungsmechanismen (normalerweise Touch für Mobilgeräte) zugänglich ist, wie im Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) oben beschrieben, und dass der Rest der Seite verschoben oder beim Zugriff auf das Menü versteckt wird, um Verwirrung bei der Navigation zu vermeiden.

Klicken Sie hier für ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist die Eingabe von Daten für Benutzer tendenziell lästiger als das äquivalente Erlebnis auf Desktop-Computern. Es ist bequemer, Text in Formulareingaben mithilfe einer Desktop- oder Laptop-Tastatur einzugeben, als über eine virtuelle Touchscreen-Tastatur oder eine winzige mobile physische Tastatur.

Aus diesem Grund lohnt es sich, die erforderliche Tippmenge zu minimieren. Beispielsweise, anstatt Benutzer für jede Eingabeingabe dazu zu bringen, ihre Jobbezeichnung über ein normales Texteingabefeld einzugeben, könnten Sie ein {{htmlelement("select")}}-Menü anbieten, das die üblichsten Optionen enthält (was auch zur Konsistenz bei der Dateneingabe beitragen würde) und eine "Sonstiges"-Option, die ein Textfeld anzeigt, um jede unvertraute Eingabe einzugeben. Ein einfaches Beispiel, das dieses Konzept im Einsatz zeigt, finden Sie in [common-job-types.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/common-job-types.html) (sehen Sie das [Beispiel zu gängigen Jobs live](https://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Es ist auch sinnvoll, die Verwendung von HTML-Formulareingabetypen wie `date` auf mobilen Plattformen in Betracht zu ziehen, da sie damit gut umgehen – sowohl Android als auch iOS, zum Beispiel, zeigen benutzerfreundliche Widgets, die gut zum Geräteerlebnis passen. Weitere Beispiele finden Sie in [html5-form-examples.html](https://github.com/mdn/learning-area/blob/main/accessibility/mobile/html5-form-examples.html) (sehen Sie die [HTML5-Formularbeispiele live](https://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) – probieren Sie diese aus und manipulieren Sie sie auf mobilen Geräten. Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswahlfelder für die Auswahl von Zeiten und Daten.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, können Sie immer unterschiedliches Markup an Ihre mobilen Geräte über Feature-Erkennung bereitstellen. Sehen Sie unseren Artikel über [Funktionserkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für mehr Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen mobilen, auf Barrierefreiheit spezifischen Problemen und deren Überwindung bereitgestellt. Wir haben Sie auch durch die Benutzung der gängigsten Screenreader geführt, um Ihnen bei der Barrierefreiheitsprüfung zu helfen.

## Siehe auch

- [Richtlinien für die Entwicklung mobiler Websites](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_ über verschiedene Techniken für mobiles Webdesign.
- [Machen Sie Ihre Website für berührungsempfindliche Geräte funktionsfähig](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf Mobilgeräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
