---
title: Ereignisreferenz
slug: Web/Events
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

[Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um Code über "interessante Änderungen" zu informieren, die die Codeausführung betreffen können. Diese können sich aus Benutzerinteraktionen wie der Verwendung einer Maus oder dem Ändern der Fenstergröße, Änderungen im Status der zugrunde liegenden Umgebung (z. B. niedriger Batteriestand oder Medienereignisse des Betriebssystems) und anderen Ursachen ergeben.

Jedes Ereignis wird durch ein Objekt dargestellt, das auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle basiert und zusätzliche benutzerdefinierte Felder und/oder Funktionen enthalten kann, um Informationen darüber zu liefern, was passiert ist. Die Dokumentation für jedes Ereignis enthält eine Tabelle (in der Nähe der Spitze), die einen Link zur zugehörigen Ereignisschnittstelle und andere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen finden Sie unter [Event > Interfaces based on Event](/de/docs/Web/API/Event#interfaces_based_on_event).

Dieses Thema bietet einen Index zu den hauptsächlichen _Arten_ von Ereignissen, die für Sie interessant sein könnten (Animation, Zwischenablage, Arbeiter usw.), zusammen mit den Hauptklassen, die diese Arten von Ereignissen implementieren.

## Ereignisindex

<table class="standard-table">
  <tbody>
    <tr>
      <th>Art des Ereignisses</th>
      <th style="width: 50%">Beschreibung</th>
      <th>Dokumentation</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Wird verwendet, um auf Änderungen des Animationsstatus zu reagieren
          (z. B. wenn eine Animation startet oder endet).
        </p>
      </td>
      <td>
        Animasionsereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Asynchrone Datenabfrage</td>
      <td><p>Ereignisse in Bezug auf die Datenabfrage.</p></td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/AbortSignal#events"
          ><code>AbortSignal</code></a
        >,
        <a href="/de/docs/Web/API/XMLHttpRequest#events"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/de/docs/Web/API/FileReader#events"
          ><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Zwischenablage</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Verwendet, um zu benachrichtigen, wenn Inhalte ausgeschnitten, kopiert oder eingefügt werden.</p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#clipboard_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#clipboard_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Komposition</td>
      <td>
        <p>
          Ereignisse in Bezug auf Komposition; Eingabe von Text "indirekt" (anstatt normale Tastendrücke zu verwenden).
        </p>
        <p>
          Zum Beispiel Text, der über eine Sprache-zu-Text-Engine eingegeben wird, oder spezielle Tastenkombinationen, die Tastendrücke ändern, um neue Zeichen in einer anderen Sprache darzustellen.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>CSS-Transition</td>
      <td>
        <p>
          Ereignisse in Bezug auf
          <a href="/de/docs/Web/CSS/CSS_transitions">CSS-Transitions</a>.
        </p>
        <p>
          Stellt Benachrichtigungen bereit, wenn CSS-Transitions starten, stoppen, abgebrochen werden usw.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#transition_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#transition_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/de/docs/Web/API/Window#transition_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Datenbank</td>
      <td>
        <p>
          Ereignisse in Bezug auf Datenbankoperationen: Öffnen, Schließen, Transaktionen, Fehler usw.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/IDBDatabase#events"
          ><code>IDBDatabase</code></a
        >,
        <a href="/de/docs/Web/API/IDBOpenDBRequest#events"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/de/docs/Web/API/IDBRequest#events"
          ><code>IDBRequest</code></a
        >,
        <a href="/de/docs/Web/API/IDBTransaction#events"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>DOM-Veränderung</td>
      <td>
        <p>
          Ereignisse in Bezug auf Modifikationen der Document Object Model (DOM)-Hierarchie und -Knoten.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutationsereignisse</a> sind veraltet.
            <a href="/de/docs/Web/API/MutationObserver"
              >Mutationsbeobachter</a
            >
            sollten stattdessen verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'drop, Rad</td>
      <td>
        <p>
          Ereignisse in Bezug auf die Verwendung der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          und <a href="/de/docs/Web/API/WheelEvent">Radeinstellungen</a>.
        </p>
        <p>
          Zieh- und Radeinstellungen sind von Mauseinstellungen abgeleitet. Während diese bei Verwendung des Mausrads oder Drag/Drop ausgelöst werden, können sie auch mit anderer geeigneter Hardware verwendet werden.
        </p>
      </td>
      <td>
        <p>
          Zieheinstellungen ausgelöst auf
          <a href="/de/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
        </p>
        <p>
          Radeinstellungen ausgelöst auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td><p>Ereignisse in Bezug auf das Gewinnen und Verlieren des Fokus von Elementen.</p></td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#focus_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Formular</td>
      <td>
        <p>Ereignisse in Bezug auf Formulare, die konstruiert, zurückgesetzt und übermittelt werden.</p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Vollbild</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Wird verwendet, um zu benachrichtigen, wenn zwischen Vollbild- und Fenstermodus gewechselt wird, und auch über Fehler, die während dieses Wechsels auftreten.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gamepad</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#gamepad_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gesten</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Touch_events">Touch-Ereignisse</a> werden zur Implementierung von Gesten empfohlen.
        </p>
      </td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/de/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          >.
        </p>
        <p>Hinzu kommen einige nicht standardisierte Gesteneinstellungen:</p>
        <ul>
          <li>
            Nicht standardisierte WebKit-spezifische Ereignisse auf
            <a href="/de/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >:
            <a href="/de/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code> Ereignis</a
            >,
            <a href="/de/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code> Ereignis</a
            >,
            <a href="/de/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code> Ereignis</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Verlauf</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/History_API">History API</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#history_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Anzeigemanagement von HTML-Elementinhalten</td>
      <td>
        <p>
          Ereignisse in Bezug auf das Ändern des Zustands eines Anzeige- oder Textelements.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLSlotElement#events"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Eingaben</td>
      <td>
        <p>
          Ereignisse in Bezug auf HTML-Eingabeelemente, z.B.
          {{HTMLElement("input")}}, {{HTMLElement("select")}} oder
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLInputElement#events"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Tastatur</td>
      <td>
        <p>
          Ereignisse in Bezug auf die Verwendung einer
          <a href="/de/docs/Web/API/KeyboardEvent">Tastatur</a>.
        </p>
        <p>Verwendet, um zu benachrichtigen, wenn Tasten hoch, unten oder nur gedrückt werden.</p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Laden/Entladen von Dokumenten</td>
      <td><p>Ereignisse in Bezug auf das Laden und Entladen von Dokumenten.</p></td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          >
          und
          <a href="/de/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifeste</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Installation von
          <a href="/de/docs/Web/Progressive_web_apps/Manifest">progressive Web-App-Manifeste</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr id="media">
      <td>Medien</td>
      <td>
        <p>
          Ereignisse in Bezug auf die Mediennutzung (einschließlich der
          <a href="/de/docs/Web/API/Media_Capture_and_Streams_API#events"
            >Media Capture and Streams API</a
          >,
          <a href="/de/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
          <a href="/de/docs/Web/API/Picture-in-Picture_API#events"
            >Picture-in-Picture API</a
          >, usw.).
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/ScriptProcessorNode#events"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/de/docs/Web/API/HTMLMediaElement#events"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/de/docs/Web/API/AudioTrackList#events"
          ><code>AudioTrackList</code></a
        >,
        <a href="/de/docs/Web/API/AudioScheduledSourceNode#events"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/de/docs/Web/API/MediaRecorder#events"
          ><code>MediaRecorder</code></a
        >,
        <a href="/de/docs/Web/API/MediaStream#events"
          ><code>MediaStream</code></a
        >,
        <a href="/de/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/de/docs/Web/API/VideoTrackList#events"
          ><code>VideoTrackList</code></a
        >,
        <a href="/de/docs/Web/API/HTMLTrackElement#events"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/de/docs/Web/API/OfflineAudioContext#events"
          ><code>OfflineAudioContext</code></a
        >,
        <a href="/de/docs/Web/API/TextTrack#events"><code>TextTrack</code></a
        >,
        <a href="/de/docs/Web/API/TextTrackList#events"
          ><code>TextTrackList</code></a
        >,
        <a href="/de/docs/Web/HTML/Reference/Elements/audio#events">Element/audio</a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/video#events">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Nachrichtenübermittlung</td>
      <td>
        <p>
          Ereignisse in Bezug auf das Empfangen einer Nachricht von einem anderen Browsingkontext über ein Fenster.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Maus</td>
      <td>
        <p>
          Ereignisse in Bezug auf die Verwendung einer
          <a href="/de/docs/Web/API/MouseEvent">Computermaus</a>.
        </p>
        <p>
          Verwendet, um zu benachrichtigen, wenn die Maus geklickt, doppelt geklickt, hoch- und runtergefahren, rechts geklickt wird, in ein Element hinein- und hinausbewegt wird, Text ausgewählt wird usw.
        </p>
        <p>
          Zeigerereignisse bieten eine hardwareunabhängige Alternative zu Mausereignissen. Zieh- und Radeinstellungen sind von Mausereignissen abgeleitet.
        </p>
      </td>
      <td>
        Mausereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Netzwerk/Verbindung</td>
      <td><p>Ereignisse in Bezug auf das Gewinnen und Verlieren der Netzwerkverbindung.</p></td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/de/docs/Web/API/Network_Information_API"
            >Netzwerkinformations-API</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Zahlungen</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Payment_Request_API"
            >Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >,
          <a href="/de/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Leistung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit allen leistungsbezogenen Spezifikationen, die in
          <a href="/de/docs/Web/API/Performance_API"
            >Performance-APIs</a
          > gruppiert sind.
        </p>
      </td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Zeiger</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Stellt hardwareunabhängige Benachrichtigungen von Zeigegeräten bereit, einschließlich Maus, Touch, Stift/Stylo.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Drucken</td>
      <td><p>Ereignisse in Bezug auf das Drucken.</p></td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#print_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Promise-Ablehnung</td>
      <td>
        <p>
          Ereignisse, die an den globalen Skriptkontext gesendet werden, wenn ein JavaScript-Promise abgelehnt wird.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/WebSocket#events"><code>WebSocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Ereignisse in Bezug auf SVG-Bilder.</p></td>
      <td>
        <p>
          Ereignisse ausgelöst auf
          <a href="/de/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >,
          <a href="/de/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/de/docs/Web/API/SVGGraphicsElement#events"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Textauswahl</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Selection">Selection API</a> Ereignisse
          in Bezug auf die Textauswahl.
        </p>
      </td>
      <td>
        <p>
          Ereignis (<code>selectionchange</code>) ausgelöst auf
          [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event),
          [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event).
        </p>
      </td>
    </tr>
    <tr>
      <td>Touch</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Touch_events">Touch Events API</a>.
        </p>
        <p>
          Stellt Benachrichtigungen von der Interaktion mit einem berührungsempfindlichen Bildschirm bereit (also durch Verwenden eines Fingers oder Stylus). Nicht in Bezug auf die
          <a href="/de/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#touch_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Virtuelle Realität</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> Die
            <a href="/de/docs/Web/API/WebVR_API">WebVR API</a> (und
            zugehörige
            <a href="/de/docs/Web/API/WebVR_API#window_events"
              ><code>Window</code>-Ereignisse</a
            >) sind veraltet.
          </p>
        </div>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >,
        <a href="/de/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >,
        <a href="/de/docs/Web/API/XRReferenceSpace#events"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (Echtzeitkommunikation)</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/RTCDataChannel#events"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/de/docs/Web/API/RTCDTMFSender#events"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/de/docs/Web/API/RTCIceTransport#events"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/de/docs/Web/API/RTCPeerConnection#events"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Server-sent events</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Server-sent_events"
            >Server-sent events API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sprache</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Ereignisse in Bezug auf die
          <a href="/de/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/de/docs/Web/API/Service_Worker_API">Service Worker API</a
          >,
          <a href="/de/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          >, und
          <a href="/de/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Wird verwendet, um auf neue Nachrichten und Nachrichtenübertragungsfehler zu reagieren. Service-Arbeiter können auch über andere Ereignisse benachrichtigt werden, einschließlich Push-Benachrichtigungen, Benutzer, die auf angezeigte Benachrichtigungen klicken, dass das Push-Abonnement ungültig wurde, Löschung von Elementen aus dem Inhaltsindex usw.
        </p>
      </td>
      <td>
        Ereignisse ausgelöst auf
        <a href="/de/docs/Web/API/ServiceWorkerGlobalScope#events"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/de/docs/Web/API/DedicatedWorkerGlobalScope#events"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/de/docs/Web/API/SharedWorkerGlobalScope#events"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/de/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/de/docs/Web/API/Worker#events"
          ><code>Worker</code></a
        >,
        <a href="/de/docs/Web/API/BroadcastChannel#events"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/de/docs/Web/API/MessagePort#events"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
  </ol>{{ListSubpages}}
</section>
