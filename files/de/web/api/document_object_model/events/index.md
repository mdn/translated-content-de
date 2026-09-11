---
title: DOM-Ereignisse
short-title: Arbeiten mit Ereignissen
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: de189c9ecabb11ee95043a801729050c624723a7
---

{{DefaultAPISidebar("DOM")}}

[Events](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um Code über „interessante Änderungen“ zu informieren, die die Codeausführung beeinflussen können. Diese können durch Benutzerinteraktionen wie die Verwendung einer Maus oder das Ändern der Fenstergröße, Änderungen des Zustands der zugrunde liegenden Umgebung (z. B. niedriger Akkustand oder Medienereignisse des Betriebssystems) sowie andere Ursachen entstehen.

Jedes Ereignis wird durch ein Objekt dargestellt, das auf der Schnittstelle [`Event`](/de/docs/Web/API/Event) basiert und möglicherweise zusätzliche benutzerdefinierte Felder und/oder Funktionen enthält, um Informationen über das Geschehene bereitzustellen. Die Dokumentation für jedes Ereignis enthält eine Tabelle (nahe dem Anfang), die einen Link zur zugehörigen Ereignisschnittstelle sowie weitere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen finden Sie unter [Event > Interfaces based on Event](/de/docs/Web/API/Event#interfaces_based_on_event).

Dieses Thema bietet einen Index der wichtigsten _Arten_ von Ereignissen, die für Sie interessant sein könnten (Animation, Zwischenablage, Workers usw.), zusammen mit den wichtigsten Klassen, welche diese Ereignisarten implementieren.

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
          Werden verwendet, um auf Änderungen des Animationsstatus zu reagieren
          (z. B. wenn eine Animation beginnt oder endet).
        </p>
      </td>
      <td>
        Animationsereignisse werden ausgelöst auf
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
      <td>Asynchrones Abrufen von Daten</td>
      <td><p>Ereignisse im Zusammenhang mit dem Abrufen von Daten.</p></td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Werden ausgelöst, wenn Inhalte ausgeschnitten, kopiert oder eingefügt werden.</p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit Komposition, also der „indirekten“
          Texteingabe (anstatt über gewöhnliche Tastendrücke).
        </p>
        <p>
          Beispielsweise Text, der über eine Sprach-zu-Text-Engine eingegeben wird,
          oder durch spezielle Tastenkombinationen, welche Tastendrücke verändern,
          um neue Zeichen in einer anderen Sprache darzustellen.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>CSS-Transition</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit
          <a href="/de/docs/Web/CSS/Guides/Transitions">CSS Transitions</a>.
        </p>
        <p>
          Stellt Benachrichtigungsereignisse bereit, wenn CSS-Transitions beginnen,
          enden, abgebrochen werden usw.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit Datenbankoperationen: Öffnen, Schließen,
          Transaktionen, Fehler usw.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
      <td>DOM-Mutation</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Änderungen an der Hierarchie und den Knoten
          des Document Object Model (DOM).
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutation Events</a> sind
            veraltet.
            <a href="/de/docs/Web/API/MutationObserver"
              >Mutation Observers</a
            >
            sollten stattdessen verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'Drop, Mausrad</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          und <a href="/de/docs/Web/API/WheelEvent">Mausradereignissen</a>.
        </p>
        <p>
          Drag- und Wheel-Ereignisse werden von Mausereignissen abgeleitet. Sie
          werden zwar bei der Verwendung des Mausrads oder von Drag-and-Drop
          ausgelöst, können aber auch mit anderer geeigneter Hardware verwendet werden.
        </p>
      </td>
      <td>
        <p>
          Drag-Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
        </p>
        <p>
          Wheel-Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td><p>Ereignisse im Zusammenhang damit, dass Elemente den Fokus erhalten oder verlieren.</p></td>
      <td>
        Ereignisse werden ausgelöst auf
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
        <p>Ereignisse im Zusammenhang mit dem Erstellen, Zurücksetzen und Absenden von Formularen.</p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >.
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
          Werden ausgelöst, wenn zwischen Vollbild- und Fenstermodus gewechselt
          wird, sowie bei Fehlern, die während dieses Übergangs auftreten.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#gamepad_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gesten</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Touch_events">Touch Events</a> werden
          zur Implementierung von Gesten empfohlen.
        </p>
      </td>
      <td>
        <p>
          Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/de/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          >.
        </p>
        <p>Zusätzlich gibt es eine Reihe nicht standardisierter Gestenereignisse:</p>
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
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#history_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Verwaltung der Inhaltsanzeige von HTML-Elementen</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit dem Ändern des Zustands eines Anzeige-
          oder Textelements.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit HTML-Eingabeelementen, z. B.
          {{HTMLElement("input")}}, {{HTMLElement("select")}} oder
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit der Verwendung einer
          <a href="/de/docs/Web/API/KeyboardEvent">Tastatur</a>.
        </p>
        <p>Werden ausgelöst, wenn Tasten losgelassen, gedrückt oder gerade betätigt werden.</p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
      <td><p>Ereignisse im Zusammenhang mit dem Laden und Entladen von Dokumenten.</p></td>
      <td>
        <p>
          Ereignisse werden ausgelöst auf
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
          <a href="/de/docs/Web/Progressive_web_apps/Manifest">Progressive-Web-App-Manifesten</a>.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        >.
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
          > usw.).
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
      <td>Messaging</td>
      <td>
        <p>
          Ereignisse im Zusammenhang damit, dass ein Fenster eine Nachricht von
          einem anderen Browsing-Kontext empfängt.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >.
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
          Werden ausgelöst, wenn die Maus geklickt oder doppelt geklickt wird,
          bei Ereignissen zum Drücken und Loslassen, bei Rechtsklicks, beim
          Bewegen in und aus einem Element, bei Textauswahl usw.
        </p>
        <p>
          Pointer-Ereignisse bieten eine hardwareunabhängige Alternative zu
          Mausereignissen. Drag- und Wheel-Ereignisse werden von Mausereignissen abgeleitet.
        </p>
      </td>
      <td>
        Mausereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Netzwerk/Verbindung</td>
      <td><p>Ereignisse im Zusammenhang mit dem Herstellen und Verlieren einer Netzwerkverbindung.</p></td>
      <td>
        <p>
          Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
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
          Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit einer leistungsbezogenen Spezifikation,
          die unter
          <a href="/de/docs/Web/API/Performance_API"
            >Performance APIs</a
          >
          zusammengefasst ist.
        </p>
      </td>
      <td>
        <p>
          Ereignisse werden ausgelöst auf
          <a href="/de/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >.
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
          Stellt hardwareunabhängige Benachrichtigungen von Zeigegeräten bereit,
          einschließlich Maus, Touch, Stift/Stylus.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
      <td><p>Ereignisse im Zusammenhang mit dem Drucken.</p></td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#print_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Promise-Ablehnung</td>
      <td>
        <p>
          Ereignisse, die an den globalen Skriptkontext gesendet werden, wenn
          ein JavaScript-Promise abgelehnt wird.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >.
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
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/WebSocket#events"><code>WebSocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Ereignisse im Zusammenhang mit SVG-Bildern.</p></td>
      <td>
        <p>
          Ereignisse werden ausgelöst auf
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
          Ereignisse der <a href="/de/docs/Web/API/Selection">Selection API</a>
          im Zusammenhang mit der Auswahl von Text.
        </p>
      </td>
      <td>
        <p>
          Ereignis (<code>selectionchange</code>), das ausgelöst wird auf
          [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event),
          [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event).
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
          Stellt Benachrichtigungsereignisse bei der Interaktion mit einem
          berührungsempfindlichen Bildschirm bereit (d.h. mit einem Finger oder
          Stylus). Nicht mit der
          <a href="/de/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >
          verbunden.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit der
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
        Ereignisse werden ausgelöst auf
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
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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
      <td>Server-gesendete Ereignisse</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Server-sent_events"
            >Server-Sent Events API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >.
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
        Ereignisse werden ausgelöst auf
        <a href="/de/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/de/docs/Web/API/Service_Worker_API">Service Worker API</a
          >,
          <a href="/de/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          > und der
          <a href="/de/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Werden verwendet, um auf neue Nachrichten und Fehler beim Senden von
          Nachrichten zu reagieren. Service Workers können außerdem über andere
          Ereignisse benachrichtigt werden, darunter Push-Benachrichtigungen,
          das Klicken auf angezeigte Benachrichtigungen durch Benutzer, die
          Ungültigkeit eines Push-Abonnements, das Löschen von Einträgen aus dem
          Inhaltsindex usw.
        </p>
      </td>
      <td>
        Ereignisse werden ausgelöst auf
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

## Erstellen und Auslösen von Ereignissen

Zusätzlich zu den von integrierten Schnittstellen ausgelösten Ereignissen können Sie DOM-Ereignisse selbst erstellen und auslösen. Solche Ereignisse werden üblicherweise als _synthetische Ereignisse_ bezeichnet, im Gegensatz zu den vom Browser ausgelösten Ereignissen.

### Benutzerdefinierte Ereignisse erstellen

Ereignisse können mit dem Konstruktor [`Event`](/de/docs/Web/API/Event) wie folgt erstellt werden:

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

### Benutzerdefinierte Daten hinzufügen – CustomEvent()

Um dem Ereignisobjekt weitere Daten hinzuzufügen, gibt es die Schnittstelle [CustomEvent](/de/docs/Web/API/CustomEvent), und die Eigenschaft **detail** kann verwendet werden, um benutzerdefinierte Daten zu übergeben.
Beispielsweise könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dadurch können Sie anschließend im Ereignis-Listener auf die zusätzlichen Daten zugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Benutzerdefinierte Daten hinzufügen – Event ableiten

Die Schnittstelle [`Event`](/de/docs/Web/API/Event) kann auch abgeleitet werden. Dies ist besonders nützlich für die Wiederverwendung, für komplexere benutzerdefinierte Daten oder sogar zum Hinzufügen von Methoden zum Ereignis.

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

Dieses Codebeispiel definiert eine Klasse `BuildEvent` mit einer schreibgeschützten Eigenschaft und einem festen Ereignistyp.

Das Ereignis könnte dann wie folgt erstellt werden:

```js
const event = new BuildEvent(elem.dataset.time);
```

Auf die zusätzlichen Daten kann anschließend in den Ereignis-Listenern mithilfe der benutzerdefinierten Eigenschaften zugegriffen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Event-Bubbling

Es ist oft wünschenswert, ein Ereignis von einem Kindelement auszulösen und es von einem Vorgängerelement abfangen zu lassen; optional können Sie Daten mit dem Ereignis übergeben:

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

### Ereignisse dynamisch erstellen und auslösen

Elemente können auf Ereignisse warten, die noch nicht erstellt wurden:

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

## Integrierte Ereignisse auslösen

Dieses Beispiel zeigt, wie ein Klick auf ein Kontrollkästchen mit DOM-Methoden simuliert wird (d.h. ein Klickereignis programmgesteuert erzeugt wird). [Beispiel in Aktion ansehen.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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

## Ereignishandler registrieren

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Ereignishandler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er entweder der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen oder als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [Schnittstelle `Event`](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mit den Event-Listener-Methoden mehrere Ereignishandler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zum Festlegen von Ereignishandlern mithilfe von HTML-`onevent`-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwieriger zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### `onevent`-Eigenschaften verwenden

Konventionsgemäß haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende „onevent“-Eigenschaften (benannt, indem dem Namen des Ereignisses „on“ vorangestellt wird). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt durch Ihren eigenen Code aufgerufen werden.

Um Ereignishandler-Code festzulegen, können Sie ihn einfach der entsprechenden `onevent`-Eigenschaft zuweisen. Für jedes Ereignis kann in einem Element nur ein Ereignishandler zugewiesen werden. Bei Bedarf kann der Handler ersetzt werden, indem derselben Eigenschaft eine andere Funktion zugewiesen wird.

Das folgende Beispiel zeigt, wie eine Funktion `greet()` für das Ereignis `click` mithilfe der Eigenschaft `onclick` festgelegt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die Schnittstelle [`Event`](/de/docs/Web/API/Event) oder wird von ihr abgeleitet.

### EventTarget.addEventListener

Die flexibelste Methode, einen Ereignishandler für ein Element festzulegen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, einem Element mehrere Listener zuzuweisen, und erlaubt es, Listener bei Bedarf mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) zu _entfernen_.

> [!NOTE]
> Die Möglichkeit, Ereignishandler hinzuzufügen und zu entfernen, erlaubt es Ihnen beispielsweise, dass dieselbe Schaltfläche unter unterschiedlichen Umständen verschiedene Aktionen ausführt. Darüber hinaus kann das Aufräumen alter oder ungenutzter Ereignishandler in komplexeren Programmen die Effizienz verbessern.

Das folgende Beispiel zeigt, wie eine Funktion `greet()` als Listener/Ereignishandler für das Ereignis `click` festgelegt werden kann (Sie können auf Wunsch statt einer benannten Funktion einen anonymen Funktionsausdruck verwenden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann außerdem zusätzliche Argumente/Optionen annehmen, um Aspekte der Erfassung und Entfernung von Ereignissen zu steuern. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### AbortSignal verwenden

Eine bemerkenswerte Funktion von Event-Listenern ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignishandler gleichzeitig zu bereinigen.

Dazu wird dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignishandler übergeben, die Sie gemeinsam entfernen können möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, dem das `AbortSignal` gehört. Dadurch werden alle Ereignishandler entfernt, die mit diesem Signal hinzugefügt wurden. Um beispielsweise einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dieser Ereignishandler kann anschließend wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

### Interaktion mehrerer Ereignishandler

Die IDL-Eigenschaft `onevent` (beispielsweise `element.onclick = ...`) und das HTML-Inhaltsattribut `onevent` (beispielsweise `<button onclick="...">`) zielen beide auf denselben einzelnen Handler-Slot. HTML wird geladen, bevor JavaScript auf dasselbe Element zugreifen kann, daher ersetzt JavaScript gewöhnlich die in HTML angegebene Einstellung. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügte Handler sind unabhängig. Die Verwendung von `onevent` entfernt oder ersetzt keine mit `addEventListener()` hinzugefügten Listener und umgekehrt.

Wenn ein Ereignis ausgelöst wird, werden Listener in Phasen aufgerufen. Es gibt zwei Phasen: _Capture_ und _Bubble_. In der Capture-Phase beginnt das Ereignis beim höchsten Vorgängerelement und bewegt sich im DOM-Baum nach unten, bis es das Ziel erreicht. In der Bubble-Phase bewegt sich das Ereignis in die entgegengesetzte Richtung. Event-Listener warten standardmäßig in der Bubble-Phase; sie können in der Capture-Phase warten, indem bei `addEventListener()` `capture: true` angegeben wird. Innerhalb einer Phase werden Listener in der Reihenfolge ausgeführt, in der sie registriert wurden. Der `onevent`-Handler wird registriert, wenn er erstmals nicht null wird; spätere Neuzuweisungen ändern nur seinen Callback, nicht seine Position in der Reihenfolge.

Der Aufruf von [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) verhindert, dass Listener auf anderen Elementen später in der Propagierungskette aufgerufen werden. [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) verhindert außerdem den Aufruf verbleibender Listener auf demselben Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
