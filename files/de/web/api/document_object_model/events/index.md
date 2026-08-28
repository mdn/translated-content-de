---
title: DOM-Ereignisse
short-title: Arbeiten mit Ereignissen
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{DefaultAPISidebar("DOM")}}

[Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um den Code über "interessante Änderungen" zu informieren, die die Codeausführung beeinflussen könnten. Diese Änderungen können aus Benutzerinteraktionen resultieren, wie z.B. der Verwendung einer Maus oder dem Ändern der Fenstergröße, Änderungen im Zustand der zugrunde liegenden Umgebung (z.B. niedriger Batteriestand oder Medienereignisse des Betriebssystems) und anderen Ursachen.

Jedes Ereignis wird durch ein Objekt repräsentiert, das auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle basiert und zusätzliche benutzerdefinierte Felder und/oder Funktionen haben kann, um Informationen darüber bereitzustellen, was passiert ist. Die Dokumentation für jedes Ereignis enthält eine Tabelle (in der Nähe des Anfangs), die einen Link zur zugehörigen Ereignisschnittstelle und andere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen ist in [Event > Interfaces based on Event](/de/docs/Web/API/Event#interfaces_based_on_event) zu finden.

Dieses Thema bietet einen Index zu den Hauptarten von Ereignissen, die Sie interessieren könnten (Animation, Zwischenablage, Workers usw.), zusammen mit den Hauptklassen, die diese Arten von Ereignissen implementieren.

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
          <a href="/de/docs/Web/API/Web_Animations_API">Web Animation API</a>.
        </p>
        <p>
          Wird verwendet, um auf Änderungen des Animationsstatus zu reagieren (z.B. wenn eine Animation startet oder endet).
        </p>
      </td>
      <td>
        Animation-Ereignisse, die auf
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
          <a href="/de/docs/Web/API/Clipboard_API">Zwischenablage-API</a>.
        </p>
        <p>
          Wird verwendet, um zu benachrichtigen, wenn Inhalte ausgeschnitten, kopiert oder eingefügt werden.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#clipboard_events"
          ><code>Dokument</code></a
        >,
        <a href="/de/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#clipboard_events"
          ><code>Fenster</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Komposition</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Komposition; Eingabe von Text "indirekt" (anstelle der Verwendung normaler Tastatureingaben).
        </p>
        <p>
          Zum Beispiel Text, der über eine Spracherkennungs-Engine eingegeben wurde, oder mit speziellen Tasten-kombinationen, die Tastatureingaben ändern, um neue Zeichen in einer anderen Sprache darzustellen.
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
          <a href="/de/docs/Web/CSS/Guides/Transitions">CSS-Übergängen</a>.
        </p>
        <p>
          Bietet Benachrichtigungsevents, wenn CSS-Übergänge starten, stoppen, abgebrochen werden usw.
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
      <td>DOM-Veränderung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Änderungen an der Document Object Model (DOM)-Hierarchie und -Knoten.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutation Events</a> sind
            veraltet.
            <a href="/de/docs/Web/API/MutationObserver"
              >Mutation Observers</a>
            sollten stattdessen verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'drop, Wheel</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a>
          und <a href="/de/docs/Web/API/WheelEvent">Wheel-Ereignisse</a>.
        </p>
        <p>
          Drag- und Wheel-Ereignisse leiten sich von Mausevents ab. Sie werden ausgelöst, wenn das Mausrad oder Drag/Drop verwendet wird, können jedoch auch mit anderer geeigneter Hardware verwendet werden.
        </p>
      </td>
      <td>
        <p>
          Drag-Ereignisse, die auf
          <a href="/de/docs/Web/API/Document#drag_drop_events"
            ><code>Dokument</code></a
          > ausgelöst werden.
        </p>
        <p>
          Wheel-Ereignisse, die auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit dem Gewinnen und Verlieren des Fokus von Elementen.
        </p>
      </td>
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
        <p>
          Ereignisse im Zusammenhang mit Formularen, die erstellt, zurückgesetzt und gesendet werden.
        </p>
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
          <a href="/de/docs/Web/API/Fullscreen_API">Vollbild-API</a>.
        </p>
        <p>
          Wird verwendet, um beim Wechsel zwischen Vollbild- und Fenstermodus zu benachrichtigen und auch über Fehler, die während dieses Übergangs auftreten.
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
          <a href="/de/docs/Web/API/Gamepad_API">Gamepad-API</a>.
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
        <p>Zusätzlich gibt es eine Reihe von nicht-standardisierten Gestenereignissen:</p>
        <ul>
          <li>
            Nicht-standardisierte WebKit-spezifische Ereignisse auf
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
          <a href="/de/docs/Web/API/History_API">History-API</a>.
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
      <td>Anzeige- und Textverwaltung von HTML-Elementen</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Änderung des Zustands eines Display- oder Textelements.
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
          Ereignisse im Zusammenhang mit HTML-Eingabefeldern, z.B.
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
        <p>
          Wird verwendet, um zu benachrichtigen, wenn Tasten losgelassen, gedrückt oder einfach nur gedrückt werden.
        </p>
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
          <a href="/de/docs/Web/Progressive_web_apps/Manifest">Manifesten von progressiven Web-Apps</a>.
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
          Ereignisse im Zusammenhang mit der Mediennutzung (einschließlich der
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
        <a href="/de/docs/Web/HTML/Reference/Elements/video#events">Element/video</a>
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Nachrichtenübermittlung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit dem Empfang einer Nachricht von einem anderen Browsing-Kontext in einem Fenster.
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
          Wird verwendet, um zu benachrichtigen, wenn die Maus geklickt, doppelt geklickt wird, bei Auf- und Abbewegungen, Rechtsklicks, Bewegungen in und aus einem Element, Textauswahl usw.
        </p>
        <p>
          Zeigerereignisse bieten eine Hardware-unabhängige Alternative zu Mausevents. Drag- und Wheel-Ereignisse leiten sich von Mausevents ab.
        </p>
      </td>
      <td>
        Mausevents ausgelöst auf
        <a href="/de/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Netzwerk/Verbindung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit dem Herstellen und Verlieren einer Netzwerkverbindung.
        </p>
      </td>
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
          >
          (<a href="/de/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >) ausgelöst werden.
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
            >Performance-APIs</a
          > zusammengefasst ist.
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
      <td>Zeiger</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Bietet hardware-unabhängige Benachrichtigung von Zeigegeräten einschließlich Maus, Touch, Stift/Stylus.
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
      <td>Druck</td>
      <td><p>Ereignisse im Zusammenhang mit dem Drucken.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#print_events"><code>Window</code></a
        > ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Promise Ablehnung</td>
      <td>
        <p>
          Ereignisse, die an den globalen Skriptkontext gesendet werden, wenn ein JavaScript-Promise abgelehnt wird.
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
          <a href="/de/docs/Web/API/WebSockets_API">WebSockets-API</a>.
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
          <a href="/de/docs/Web/API/Selection">Auswahl-API</a> Ereignisse im Zusammenhang mit der Textauswahl.
        </p>
      </td>
      <td>
        <p>
          Ereignis (<code>selectionchange</code>), ausgelöst auf
          [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event),
          [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event).
        </p>
      </td>
    </tr>
    <tr>
      <td>Berührung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Touch_events">Touch Events API</a>.
        </p>
        <p>
          Bietet Benachrichtigungsevents bei Interaktion mit einem berührungsempfindlichen Bildschirm (d.h. mit einem Finger oder Stylus). Nicht im Zusammenhang mit der
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
            <a href="/de/docs/Web/API/WebVR_API">WebVR-API</a> (und zugehörige
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
          <a href="/de/docs/Web/API/WebRTC_API">WebRTC-API</a>.
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
            >API für servergesendete Ereignisse</a
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
      <td>Arbeiter</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/de/docs/Web/API/Service_Worker_API">Service Worker API</a>,
          <a href="/de/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          >, und der
          <a href="/de/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Wird verwendet, um auf neue Nachrichten und Nachrichtensende-Fehler zu reagieren. Service-Arbeiter können auch über andere Ereignisse benachrichtigt werden, einschließlich Push-Benachrichtigungen, Benutzer, die auf angezeigte Benachrichtigungen klicken, das Ungültigmachen eines Push-Abonnements, das Löschen von Elementen aus dem Inhaltsindex usw.
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

## Erstellen und Auslösen von Ereignissen

Zusätzlich zu den von integrierten Schnittstellen ausgelösten Ereignissen können Sie DOM-Ereignisse selbst erstellen und auslösen. Solche Ereignisse werden üblicherweise als _synthetische Ereignisse_ bezeichnet, im Gegensatz zu den vom Browser ausgelösten Ereignissen.

### Erstellen benutzerdefinierter Ereignisse

Ereignisse können mit dem [`Event`](/de/docs/Web/API/Event)-Konstruktor wie folgt erstellt werden:

```js
const event = new Event("build");

// Listen for the event.
elem.addEventListener("build", (e) => {
  /* … */
});

// Dispatch the event.
elem.dispatchEvent(event);
```

Dieses Codebeispiel verwendet die Methode [EventTarget.dispatchEvent()](/de/docs/Web/API/EventTarget/dispatchEvent).

### Hinzufügen benutzerdefinierter Daten – CustomEvent()

Um dem Ereignisobjekt mehr Daten hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben.
Zum Beispiel könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht es Ihnen dann, auf die zusätzlichen Daten im Ereignislistener zuzugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen benutzerdefinierter Daten – Event-Klassen ableiten

Die [`Event`](/de/docs/Web/API/Event)-Schnittstelle kann auch abgeleitet werden. Dies ist besonders nützlich für die Wiederverwendung oder für komplexere benutzerdefinierte Daten oder sogar zum Hinzufügen von Methoden zum Ereignis.

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

Dieses Codebeispiel definiert eine `BuildEvent`-Klasse mit einer schreibgeschützten Eigenschaft und einem festgelegten Ereignistyp.

Das Ereignis könnte dann wie folgt erstellt werden:

```js
const event = new BuildEvent(elem.dataset.time);
```

Die zusätzlichen Daten können dann in den Ereignislistenern mithilfe der benutzerdefinierten Eigenschaften abgerufen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Ereignisaufblähung

Es ist oft wünschenswert, ein Ereignis aus einem Kind-Element auszulösen und ein übergeordnetes Element es abfangen zu lassen; optional können Sie Daten mit dem Ereignis übergeben:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// As the user types, the textarea inside the form dispatches/triggers the event to fire, using itself as the starting point
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Erstellen und dynamisches Auslösen von Ereignissen

Elemente können auf Ereignisse lauschen, die noch nicht erstellt wurden:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Auslösen von integrierten Ereignissen

Dieses Beispiel zeigt die Simulation eines Klicks (das heißt, das programmgesteuerte Generieren eines Klickereignisses) auf einer Checkbox unter Verwendung von DOM-Methoden. [Sehen Sie sich das Beispiel in Aktion an.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

<!-- cSpell:ignore cancelled -->

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
```

## Registrieren von Ereignishandlern

Es gibt zwei empfohlene Ansätze zur Registrierung von Handlern. Der Ereigniscode kann so ausgeführt werden, dass er bei einem ausgelösten Ereignis entweder dem _onevent_-Eigenschaft des Zielelements zugewiesen oder der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen wird der Handler ein Objekt erhalten, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mithilfe der Event-Listener-Methoden mehrere Ereignishandler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einrichtung von Event-Handlern mithilfe von HTML-onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer debughbar. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von onevent-Eigenschaften

Nach Konvention haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt durch das Präfix "on" vor dem Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handlercode auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Code für Ereignishandler festzulegen, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Pro Element kann für jedes Ereignis nur ein Ereignishandler zugewiesen werden. Falls erforderlich, kann der Handler durch Zuweisen einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft festgelegt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event)-Schnittstelle oder leitet sich von ihr ab.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignishandler an ein Element zu binden, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, mehrere Listener einem Element zuzuweisen und Listener bei Bedarf mit [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) zu _entfernen_.

> [!NOTE]
> Die Fähigkeit, Event-Handler hinzuzufügen und zu entfernen, erlaubt es Ihnen beispielsweise, denselben Button in verschiedenen Situationen unterschiedliche Aktionen ausführen zu lassen. Darüber hinaus kann das Aufräumen alter/ungenutzter Ereignis-Handler in komplexeren Programmen die Effizienz verbessern.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion als Listener/Event-Handler für das `click`-Ereignis festgelegt werden kann (Sie könnten stattdessen eine anonyme Funktionsausdruck verwenden, wenn gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen zur Steuerung von Aspekten, wie die Ereignisse erfasst und entfernt werden, entgegennehmen. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung von AbortSignal

Eine bemerkenswerte Funktion des Ereignis-Listeners ist die Möglichkeit, ein Abbruch-Signal zu verwenden, um mehrere Ereignishandler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) für den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignishandler übergeben wird, die Sie zusammen entfernen möchten. Anschließend können Sie [`abort()`](/de/docs/Web/API/AbortController/abort) auf den Controller mit dem Eigentum des `AbortSignal` aufrufen, und es wird alle Ereignishandler entfernen, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // pass an AbortSignal to this handler
```

Dieser Ereignishandler kann dann wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

### Interaktion mehrerer Ereignishandler

Die `onevent` IDL-Eigenschaft (zum Beispiel `element.onclick = ...`) und das HTML-Onevent-Attribut (zum Beispiel `<button onclick="...">`) zielen beide auf den gleichen einzelnen Handler-Slot ab. HTML wird geladen, bevor JavaScript auf dasselbe Element zugreifen könnte, so dass normalerweise JavaScript das ersetzt, was in HTML angegeben ist. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügte Handler sind unabhängig. Die Verwendung von `onevent` entfernt oder ersetzt nicht die mit `addEventListener()` hinzugefügten Listener und umgekehrt.

Wenn ein Ereignis ausgelöst wird, werden Listener in Phasen aufgerufen. Es gibt zwei Phasen: _Capture_ und _Bubble_. In der Capture-Phase beginnt das Ereignis am höchsten übergeordneten Element und bewegt sich den DOM-Baum hinunter, bis es das Ziel erreicht. In der Bubble-Phase bewegt sich das Ereignis in die entgegengesetzte Richtung. Ereignislistener lauschen standardmäßig in der Bubble-Phase und können in der Capture-Phase lauschen, indem sie `capture: true` mit `addEventListener()` angeben. Innerhalb einer Phase laufen Listener in der Reihenfolge, in der sie registriert wurden. Der `onevent`-Handler wird registriert, wenn er zum ersten Mal ungleich null wird; spätere Neuzuweisungen ändern nur seinen Rückruf, nicht seine Position in der Reihenfolge.

Der Aufruf von [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) verhindert den Aufruf von Listenern an anderen Elementen später in der Ausbreitungskette. [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) verhindert auch den Aufruf der verbleibenden Listener am selben Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Ereignisaufblähung](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
