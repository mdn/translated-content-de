---
title: DOM-Ereignisse
short-title: Arbeiten mit Ereignissen
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("DOM")}}

[Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um Code über "interessante Änderungen" zu informieren, die die Code-Ausführung beeinflussen können. Diese können sich aus Benutzerinteraktionen wie der Verwendung einer Maus oder der Größenänderung eines Fensters, Veränderungen im Zustand der zugrunde liegenden Umgebung (z. B. niedriger Akkustand oder Medienereignisse vom Betriebssystem) und anderen Ursachen ergeben.

Jedes Ereignis wird durch ein Objekt dargestellt, das auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle basiert und zusätzliche benutzerdefinierte Felder und/oder Funktionen enthalten kann, um Informationen darüber bereitzustellen, was passiert ist. Die Dokumentation für jedes Ereignis enthält eine Tabelle (nahe der Spitze), die einen Link zur zugehörigen Ereignisschnittstelle und andere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen finden Sie unter [Event > Schnittstellen basierend auf Ereignis](/de/docs/Web/API/Event#interfaces_based_on_event).

Dieses Thema bietet einen Index zu den Hauptarten von Ereignissen, die Sie interessieren könnten (Animation, Zwischenablage, Arbeiter usw.), zusammen mit den Hauptklassen, die diese Arten von Ereignissen implementieren.

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
          <a href="/de/docs/Web/API/Web_Animations_API">Web Animations API</a>.
        </p>
        <p>
          Wird verwendet, um auf Änderungen im Animationsstatus zu reagieren (z. B. wenn eine Animation startet oder endet).
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
      <td>Asynchrones Abrufen von Daten</td>
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
          Ereignisse im Zusammenhang mit der Komposition; Eingabe von Text "indirekt" (statt normale Tastendrücke).
        </p>
        <p>
          Zum Beispiel Text, der über eine Sprache-zu-Text-Engine eingegeben wird, oder spezielle Tastenkombinationen, die Tastendrücke ändern, um neue Zeichen in einer anderen Sprache darzustellen.
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
          Stellt Benachrichtigungsereignisse bereit, wenn CSS-Übergänge beginnen, enden, abgebrochen werden usw.
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
      <td>DOM-Modifikation</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Änderungen an der Document Object Model (DOM)-Hierarchie und Knoten.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutationsereignisse</a> sind veraltet.
            <a href="/de/docs/Web/API/MutationObserver"
              >Mutations-Observer</a
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
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          und <a href="/de/docs/Web/API/WheelEvent">Raderereignissen</a>.
        </p>
        <p>
          Zieh- und Raderereignisse leiten sich von Mausereignissen ab. Während sie beim Verwenden des Mausrads oder Drag/Drop ausgelöst werden, können sie auch mit anderer geeigneter Hardware verwendet werden.
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
          Raderereignisse, die auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          > ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td><p>Ereignisse im Zusammenhang mit dem Erlangen und Verlieren des Fokus von Elementen.</p></td>
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
        <p>Ereignisse im Zusammenhang mit der Konstruktion, dem Zurücksetzen und dem Absenden von Formularen.</p>
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
          Wird verwendet, um zu benachrichtigen, wenn zwischen Vollbild- und Fenstermodus gewechselt wird, und auch bei Fehlern, die während dieses Wechsels auftreten.
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
        <p>Darüber hinaus gibt es eine Reihe von nicht standardisierten Gestenereignissen:</p>
        <ul>
          <li>
            Nicht standardisierte, WebKit-spezifische Ereignisse auf
            <a href="/de/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >:
            <a href="/de/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code>-Ereignis</a
            >,
            <a href="/de/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code>-Ereignis</a
            >,
            <a href="/de/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code>-Ereignis</a
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
      <td>Verwaltung der HTML-Element-Inhaltsanzeige</td>
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
        <p>Wird verwendet, um zu benachrichtigen, wenn Tasten gedrückt, losgelassen oder einfach betätigt werden.</p>
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
          <a href="/de/docs/Web/Progressive_web_apps/Manifest">progressive Web-App-Manifeste</a>.
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
          Ereignisse im Zusammenhang mit einem "window", das eine Nachricht von einem anderen Browserkontext erhält.
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
          Wird verwendet, um zu benachrichtigen, wenn die Maus angeklickt, doppelt angeklickt, auf- und abgezogen, rechts angeklickt, in ein Element hinein- und hinausbewegt, Text ausgewählt usw. wird.
        </p>
        <p>
          Zeigerereignisse bieten eine hardwareunabhängige Alternative zu Mausereignissen. Zieh- und Raderereignisse leiten sich von Mausereignissen ab.
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
      <td><p>Ereignisse im Zusammenhang mit dem Erlangen und Verlust der Netzwerkverbindung.</p></td>
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
      <td>Performance</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit beliebigen leistungsbezogenen Spezifikationen, gruppiert in
          <a href="/de/docs/Web/API/Performance_API"
            >Performance APIs</a
          >.
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
      <td>Socket-Verbindungen</td>
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
          <a href="/de/docs/Web/API/Selection">Selection API</a>-Ereignisse im Zusammenhang mit der Auswahl von Text.
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
          <a href="/de/docs/Web/API/Touch_events">Touch-Events API</a>.
        </p>
        <p>
          Stellt Benachrichtigungsereignisse aus der Interaktion mit einem berührungsempfindlichen Bildschirm bereit (d.h. Verwendung eines Fingers oder Stylus). Nicht im Zusammenhang mit der
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
            <a href="/de/docs/Web/API/WebVR_API">WebVR API</a> (und dazugehörige
            <a href="/de/docs/Web/API/WebVR_API#window_events"
              ><code>Window</code>-Ereignisse</a
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
            >server gesendeten Ereignis-API</a
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
      <td>Sprachkommunikation</td>
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
          Wird verwendet, um auf neue Nachrichten und Fehler beim Versenden von Nachrichten zu reagieren. Service Worker können auch über andere Ereignisse benachrichtigt werden, einschließlich Push-Benachrichtigungen, Klicks von Nutzern auf angezeigte Benachrichtigungen, dass das Push-Abonnement ungültig geworden ist, das Löschen von Elementen aus dem Inhaltsindex usw.
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

Zusätzlich zu den von integrierten Schnittstellen ausgelösten Ereignissen können Sie selbst DOM-Ereignisse erstellen und auslösen. Solche Ereignisse werden normalerweise als _synthetische Ereignisse_ bezeichnet, im Gegensatz zu den vom Browser ausgelösten Ereignissen.

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

Um dem Ereignisobjekt mehr Daten hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben. Beispielweise könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht es Ihnen dann, die zusätzlichen Daten im Ereignis-Listener abzurufen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen benutzerdefinierter Daten – Untersubklassen von Event

Die [`Event`](/de/docs/Web/API/Event)-Schnittstelle kann auch unterklassen werden. Dies ist besonders nützlich für die Wiederverwendung oder für komplexere benutzerdefinierte Daten oder sogar zum Hinzufügen von Methoden zum Ereignis.

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

Dieses Codebeispiel definiert eine `BuildEvent`-Klasse mit einer schreibgeschützten Eigenschaft und einem festen Ereignistyp.

Das Ereignis könnte dann wie folgt erstellt werden:

```js
const event = new BuildEvent(elem.dataset.time);
```

Die zusätzlichen Daten können dann in den Ereignis-Listenern mithilfe der benutzerdefinierten Eigenschaften abgerufen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Ereignis-Blasen

Es ist oft wünschenswert, ein Ereignis von einem Kindelement auszulösen und es von einem Vorfahren abfangen zu lassen; optional können Daten mit dem Ereignis eingeschlossen werden:

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

Elemente können auf Ereignisse horchen, die noch nicht erstellt wurden:

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

Dieses Beispiel zeigt, wie man einen Klick (das programmatische Erzeugen eines Klickereignisses) auf ein Kontrollkästchen mithilfe von DOM-Methoden simuliert. [Beispiel in Aktion ansehen.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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

## Registrieren von Ereignis-Handlern

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Ereignishandler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, entweder indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen wird oder indem der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen empfängt der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mit den Ereignis-Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zum Setzen von Ereignis-Handlern mithilfe von HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger leserlich und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von onevent-Eigenschaften

Nach Konvention haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt durch Vorsetzen von "on" vor den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um zugeordneten Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignis-Handler-Code zu setzen, können Sie ihn einfach der entsprechenden onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignis-Handler zugewiesen werden. Bei Bedarf kann der Handler durch Zuweisen einer anderen Funktion zur gleichen Eigenschaft ersetzt werden.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion für das `click`-Ereignis mithilfe der `onclick`-Eigenschaft gesetzt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event)-Schnittstelle oder leitet sich von dieser ab.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignis-Handler auf ein Element zu setzen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, mehrere Listener auf ein Element zuzuweisen und ermöglicht es, Listener bei Bedarf mit [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) _zu entfernen_.

> [!NOTE]
> Die Fähigkeit, Ereignis-Handler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, denselben Button in verschiedenen Umständen unterschiedliche Aktionen ausführen zu lassen. Darüber hinaus kann das Aufräumen von alten/ungenutzten Ereignis-Handlern in komplexeren Programmen die Effizienz verbessern.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion als Listener/Ereignishandler für das `click`-Ereignis gesetzt werden kann (Sie könnten bei Bedarf eine anonyme Funktionsausdruck anstelle einer benannten Funktion verwenden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte der Art und Weise zu steuern, wie Ereignisse erfasst und entfernt werden. Weitere Informationen finden Sie auf der Referenzseite für [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung von AbortSignal

Ein bemerkenswertes Feature des Ereignis-Listeners ist die Fähigkeit, ein Abbruchs-Signal zu verwenden, um mehrere Ereignis-Handler gleichzeitig bereinigen zu können.

Dies wird erreicht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) in den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignis-Handler, die Sie gemeinsam entfernen möchten, übergeben wird. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf den Controller, der das `AbortSignal` besitzt, aufrufen, und es werden alle Ereignis-Handler entfernt, die mit diesem Signal hinzugefügt wurden. Zum Beispiel kann ein Ereignis-Handler hinzugefügt werden, den wir mit einem `AbortSignal` entfernen können:

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

Dieser Ereignis-Handler kann dann so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

### Interaktion von mehreren Ereignis-Handlern

Die `onevent` IDL-Eigenschaft (zum Beispiel, `element.onclick = ...`) und das HTML `onevent`-Inhaltsattribut (zum Beispiel, `<button onclick="...">`) zielen beide auf denselben einzigen Handler-Slot ab. HTML wird geladen, bevor JavaScript dasselbe Element erreichen kann, daher ersetzt JavaScript normalerweise das, was in HTML angegeben ist. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügte Handler sind unabhängig. Die Verwendung von `onevent` ändert oder ersetzt nicht die mit `addEventListener()` hinzugefügten Listener, und umgekehrt.

Wenn ein Ereignis ausgelöst wird, werden Listener in Phasen aufgerufen. Es gibt zwei Phasen: _Capture_ und _Bubble_. In der Capture-Phase beginnt das Ereignis vom höchsten Vorfahrenelement und bewegt sich den DOM-Baum hinunter, bis es das Ziel erreicht. In der Bubble-Phase bewegt sich das Ereignis in die entgegengesetzte Richtung. Ereignislistener hören standardmäßig in der Bubble-Phase, und sie können in der Capture-Phase lauschen, indem sie `capture: true` mit `addEventListener()` angeben. Innerhalb einer Phase werden Listener in der Reihenfolge aufgerufen, in der sie registriert wurden. Der `onevent`-Handler wird registriert, sobald er nicht null ist; spätere Neuzuordnungen ändern nur seinen Callback, nicht seine Position in der Reihenfolge.

Das Aufrufen von [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) verhindert, dass Listener auf anderen Elementen später in der Verteilungskette aufgerufen werden. [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) verhindert auch das Aufrufen der verbleibenden Listener auf demselben Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Ereignisblasen](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
