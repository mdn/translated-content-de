---
title: Ereignisreferenz
slug: Web/Events
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

[Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um Code über "interessante Änderungen" zu informieren, die die Codeausführung beeinflussen könnten. Diese können aus Benutzerinteraktionen wie der Verwendung einer Maus oder der Größenänderung eines Fensters entstehen, Veränderungen im Zustand der zugrunde liegenden Umgebung (z. B. niedriger Batteriestand oder Medienereignisse des Betriebssystems) und anderen Ursachen.

Jedes Ereignis wird durch ein Objekt repräsentiert, das auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle basiert und möglicherweise zusätzliche benutzerdefinierte Felder und/oder Funktionen enthält, um Informationen darüber bereitzustellen, was passiert ist. Die Dokumentation für jedes Ereignis enthält eine Tabelle (nahe am Anfang), die einen Link zur zugehörigen Ereignisschnittstelle und andere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen finden Sie unter [Event > Interfaces based on Event](/de/docs/Web/API/Event#interfaces_based_on_event).

Dieses Thema bietet ein Verzeichnis der Hauptarten von Ereignissen, die Sie interessieren könnten (Animation, Zwischenablage, Worker usw.) zusammen mit den Hauptklassen, die diese Arten von Ereignissen implementieren.

## Ereignisindex

<table class="standard-table">
  <tbody>
    <tr>
      <th>Ereignistyp</th>
      <th style="width: 50%">Beschreibung</th>
      <th>Dokumentation</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Wird verwendet, um auf Änderungen im Animationsstatus zu reagieren
          (z. B. wenn eine Animation beginnt oder endet).
        </p>
      </td>
      <td>
        Animationsereignisse, die auf
        <a href="/de/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Asynchrone Datenabfrage</td>
      <td><p>Ereignisse im Zusammenhang mit dem Abrufen von Daten.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/AbortSignal#events"
          ><code>AbortSignal</code></a
        >,
        <a href="/de/docs/Web/API/XMLHttpRequest#events"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/de/docs/Web/API/FileReader#events"
          ><code>FileReader</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Zwischenablage</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Wird verwendet, um zu benachrichtigen, wenn Inhalte ausgeschnitten, kopiert oder eingefügt werden.</p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#clipboard_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#clipboard_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Komposition</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Komposition; Texteingabe "indirekt" (anstatt normale Tastaturanschläge zu verwenden).
        </p>
        <p>
          Zum Beispiel Texte, die über eine Sprache-zu-Text-Engine eingegeben werden, oder mit speziellen Tastenkombinationen, die Tastaturanschläge modifizieren, um neue Zeichen in einer anderen Sprache darzustellen.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>CSS-Übergang</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit
          <a href="/de/docs/Web/CSS/CSS_transitions">CSS-Übergängen</a>.
        </p>
        <p>
          Bietet Benachrichtigungsereignisse, wenn CSS-Übergänge beginnen, stoppen, abgebrochen werden usw.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#transition_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#transition_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/de/docs/Web/API/Window#transition_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Datenbank</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Datenbankoperationen: Öffnen, Schließen, Transaktionen, Fehler usw.
        </p>
      </td>
      <td>
        Ereignisse, die auf
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
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>DOM-Änderung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Änderungen an der Document Object Model (DOM)-Hierarchie und den Knoten.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutation Events</a> sind veraltet.
            <a href="/de/docs/Web/API/MutationObserver"
              >Mutation Observers</a
            >
            sollten stattdessen verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'Drop, Rad</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          und <a href="/de/docs/Web/API/WheelEvent">Rad-Ereignisse</a>.
        </p>
        <p>
          Zieh- und Radevents leiten sich von Mausereignissen ab. Während sie bei der Verwendung des Mausrads oder Ziehens und Ablegens ausgelöst werden, können sie auch mit anderer geeigneter Hardware verwendet werden.
        </p>
      </td>
      <td>
        <p>
          Zieh-Ereignisse, die auf
          <a href="/de/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          > ausgelöst werden.
        </p>
        <p>
          Rad-Ereignisse, die auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td><p>Ereignisse im Zusammenhang mit Elementen, die den Fokus gewinnen und verlieren.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#focus_events"><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Formular</td>
      <td>
        <p>Ereignisse im Zusammenhang mit Formularen, die erstellt, zurückgesetzt und gesendet werden.</p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Vollbild</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Wird verwendet, um zu benachrichtigen, wenn zwischen Vollbild und Fenster-Modi gewechselt wird, und auch über Fehler, die während dieses Wechsels auftreten.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Gamepad</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#gamepad_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Gesten</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Touch_events">Touch-Ereignisse</a> werden empfohlen, um Gesten zu implementieren.
        </p>
      </td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/de/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          > ausgelöst werden.
        </p>
        <p>Darüber hinaus gibt es eine Reihe nicht standardisierter Gestenereignisse:</p>
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
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/History_API">History API</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#history_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Verwaltung der Inhaltsanzeige von HTML-Elementen</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Änderung des Zustands eines Anzeige- oder Textelements.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLSlotElement#events"
          ><code>HTMLSlotElement</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Eingaben</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit HTML-Eingabeelementen, z. B.
          {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/de/docs/Web/API/HTMLInputElement#events"
          ><code>HTMLInputElement</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Tastatur</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung einer
          <a href="/de/docs/Web/API/KeyboardEvent">Tastatur</a>.
        </p>
        <p>Wird verwendet, um zu benachrichtigen, wenn Tasten gedrückt, losgelassen oder einfach nur gedrückt werden.</p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Laden/Entladen von Dokumenten</td>
      <td><p>Ereignisse im Zusammenhang mit dem Laden und Entladen von Dokumenten.</p></td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          >
          und
          <a href="/de/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifeste</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Installation von
          <a href="/de/docs/Web/Progressive_web_apps/Manifest">Progressive-Web-App-Manifests</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr id="media">
      <td>Medien</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Nutzung von Medien (einschließlich der
          <a href="/de/docs/Web/API/Media_Capture_and_Streams_API#events"
            >Media Capture and Streams API</a
          >,
          <a href="/de/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
          <a href="/de/docs/Web/API/Picture-in-Picture_API#events"
            >Picture-in-Picture API</a
          > usw.).
        </p>
      </td>
      <td>
        Ereignisse, die auf
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
        <a href="/de/docs/Web/HTML/Reference/Elements/video#events">Element/video</a> ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Nachrichtenübermittlung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit einem Fenster, das eine Nachricht von einem anderen Browsing-Kontext erhält.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Maus</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung einer
          <a href="/de/docs/Web/API/MouseEvent">Computermaus</a>.
        </p>
        <p>
          Wird verwendet, um zu benachrichtigen, wenn die Maus geklickt, doppeltgeklickt, hoch- und runterbewegt, rechtsgeklickt wird, sich innerhalb und außerhalb eines Elements bewegt, Text ausgewählt wird usw.
        </p>
        <p>
          Zeigerereignisse bieten eine hardwareunabhängige Alternative zu Mausereignissen. Ziehen und Rad Ereignisse sind von Mausereignissen abgeleitet.
        </p>
      </td>
      <td>
        Mausereignisse, die auf
        <a href="/de/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Netzwerk/Verbindung</td>
      <td><p>Ereignisse im Zusammenhang mit dem Gewinn und dem Verlust der Netzwerkverbindung.</p></td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          > ausgelöst werden.
        </p>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          > ausgelöst werden
          (<a href="/de/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Zahlungen</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Payment_Request_API"
            >Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >,
          <a href="/de/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Leistung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit jeder leistungsbezogenen Spezifikation, die in
          <a href="/de/docs/Web/API/Performance_API"
            >Performance APIs</a
          > gruppiert ist.
        </p>
      </td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Pointer</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Bietet hardwareunabhängige Benachrichtigungen von Zeigegeräten einschließlich Maus, Touch, Stift/Stylus.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Drucken</td>
      <td><p>Ereignisse im Zusammenhang mit dem Drucken.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#print_events"><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Promise-Ablehnung</td>
      <td>
        <p>
          Ereignisse, die an den globalen Skriptkontext gesendet werden, wenn ein beliebiges JavaScript-Promise abgelehnt wird.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/WebSocket#events"><code>WebSocket</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Ereignisse im Zusammenhang mit SVG-Bildern.</p></td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >,
          <a href="/de/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/de/docs/Web/API/SVGGraphicsElement#events"
            ><code>SVGGraphicsElement</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Textauswahl</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Selection">Selection API</a> Ereignisse im Zusammenhang mit der Auswahl von Text.
        </p>
      </td>
      <td>
        <p>
          Ereignis (<code>selectionchange</code>), das auf
          [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event),
          [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) ausgelöst wird.
        </p>
      </td>
    </tr>
    <tr>
      <td>Touch</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Touch_events">Touch Events API</a>.
        </p>
        <p>
          Bietet Benachrichtigungsereignisse von der Interaktion mit einem berührungsempfindlichen Bildschirm (z. B. mit einem Finger oder Stift). Nicht im Zusammenhang mit der
          <a href="/de/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#touch_events"
          ><code>Element</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Virtuelle Realität</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> Die
            <a href="/de/docs/Web/API/WebVR_API">WebVR API</a> (und
            die zugehörigen
            <a href="/de/docs/Web/API/WebVR_API#window_events"
              ><code>Window</code> Ereignisse</a
            >) sind veraltet.
          </p>
        </div>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >,
        <a href="/de/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >,
        <a href="/de/docs/Web/API/XRReferenceSpace#events"
          ><code>XRReferenceSpace</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>RTC (Echtzeitkommunikation)</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
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
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Server-gesendete Ereignisse</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Server-sent_events"
            >Server-gesendete Ereignisse API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Sprache</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Worker</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/de/docs/Web/API/Service_Worker_API">Service Worker API</a
          >,
          <a href="/de/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          > und
          <a href="/de/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Wird verwendet, um auf neue Nachrichten und Nachrichtenfehler zu reagieren. Service Workers können auch über andere Ereignisse benachrichtigt werden, einschließlich Push-Benachrichtigungen, Benutzer, die auf angezeigte Benachrichtigungen klicken, dass Push-Abonnements ungültig geworden sind, das Löschen von Elementen aus dem Inhaltsindex usw.
        </p>
      </td>
      <td>
        Ereignisse, die auf
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
        > ausgelöst werden.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
- [Übersicht über Ereignishandler](/de/docs/Web/Events/Event_handlers)

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
    <li><a href="/de/docs/Web/Events/Creating_and_triggering_events">Erstellen und Auslösen von Ereignissen</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Ereignishandler (Übersicht)</a></li>
  </ol>
</section>
