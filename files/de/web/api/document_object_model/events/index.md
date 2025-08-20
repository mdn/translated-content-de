---
title: DOM-Ereignisse
short-title: Arbeiten mit Ereignissen
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: 0d4679eef2831b851863ff991099b827d3bed9c3
---

{{DefaultAPISidebar("DOM")}}

[Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) werden ausgelöst, um Code über "interessante Änderungen" zu benachrichtigen, die die Ausführung des Codes beeinflussen können. Diese können durch Benutzerinteraktionen wie zum Beispiel die Verwendung einer Maus oder das Ändern der Fenstergröße entstehen, durch Änderungen im Zustand der zugrunde liegenden Umgebung (z. B. niedriger Batteriestand oder Medienereignisse vom Betriebssystem) und andere Ursachen.

Jedes Ereignis wird durch ein Objekt repräsentiert, das auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle basiert und zusätzlich benutzerdefinierte Felder und/oder Funktionen haben kann, um Informationen über das Geschehen bereitzustellen. Die Dokumentation zu jedem Ereignis enthält eine Tabelle (in der Nähe der Spitze), die einen Link zur zugehörigen Ereignisschnittstelle und andere relevante Informationen enthält. Eine vollständige Liste der verschiedenen Ereignistypen finden Sie unter [Event > Interfaces based on Event](/de/docs/Web/API/Event#interfaces_based_on_event).

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
          <a href="/de/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Werden verwendet, um auf Statusänderungen in Animationen zu reagieren
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Asynchroner Datenabruf</td>
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Zwischenablage</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Werden verwendet, um zu benachrichtigen, wenn Inhalte ausgeschnitten, kopiert oder eingefügt werden.</p>
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Komposition</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Komposition; Eingabe von Text
          "indirekt" (anstelle der üblichen Tastaturanschläge).
        </p>
        <p>
          Zum Beispiel, Text, der über eine Sprache-zu-Text-Engine eingegeben
          wird oder durch spezielle Tastenkombinationen, die Tastatureingaben
          modifizieren, um neue Zeichen in einer anderen Sprache
          darzustellen.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>DOM-Veränderung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit Änderungen an der Document Object
          Model (DOM)-Hierarchie und -Knoten.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong>
            <a href="/de/docs/Web/API/MutationEvent">Mutationsereignisse</a>
            sind veraltet. Stattdessen sollten
            <a href="/de/docs/Web/API/MutationObserver">Mutationsbeobachter</a>
            verwendet werden.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'drop, Rad</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung der
          <a href="/de/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          und <a href="/de/docs/Web/API/WheelEvent">Radereignisse</a>.
        </p>
        <p>
          Zieh- und Radereignisse sind von Mausereignissen abgeleitet. Während
          sie ausgelöst werden, wenn ein Mausrad oder Drag/Drop verwendet wird,
          können sie auch mit anderer geeigneter Hardware verwendet werden.
        </p>
      </td>
      <td>
        <p>
          Ziehereignisse, die auf
          <a href="/de/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
          ausgelöst werden.
        </p>
        <p>
          Radereignisse, die auf
          <a href="/de/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
          ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Fokus</td>
      <td><p>Ereignisse im Zusammenhang mit dem Fokuserhalt und -verlust von Elementen.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >,
        <a href="/de/docs/Web/API/Window#focus_events"><code>Window</code></a
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Formular</td>
      <td>
        <p>Ereignisse im Zusammenhang mit dem Aufbau, Zurücksetzen und Abschicken von Formularen.</p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >
        ausgelöst werden.
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
          Werden verwendet, um zu benachrichtigen, wenn zwischen Vollbild- und Fenstermodus gewechselt wird, sowie über Fehler, die während dieses Wechsels auftreten.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Gesten</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Touch_events">Touch-Ereignisse</a>
          werden empfohlen, um Gesten zu implementieren.
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
          >
          ausgelöst werden.
        </p>
        <p>Zusätzlich gibt es eine Reihe nicht-standardmäßiger Gestenereignisse:</p>
        <ul>
          <li>
            WebKit-spezifische, nicht-standardmäßige Ereignisse auf
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Inhaltverwaltungsanzeige von HTML-Elementen</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit dem Ändern des Zustands eines Anzeige- oder Textelements.
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Eingaben</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit HTML-Eingabeelementen z.B.
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Tastatur</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der Verwendung einer
          <a href="/de/docs/Web/API/KeyboardEvent">Tastatur</a>.
        </p>
        <p>Werden verwendet, um zu benachrichtigen, wenn Tasten nach oben, unten bewegt oder einfach gedrückt werden.</p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        >
        ausgelöst werden.
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
          >
          ausgelöst werden.
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
        >
        ausgelöst werden.
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
          Ereignisse im Zusammenhang mit einem Fenster, das eine Nachricht von einem anderen Browserkontext erhält.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >
        ausgelöst werden.
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
          Werden verwendet, um zu benachrichtigen, wenn die Maus geklickt, doppelt geklickt wird, Auf- und Ab-Bewegungen, Rechtsklicks, Bewegungen in oder aus einem Element, Textauswahl usw.
        </p>
        <p>
          Pointer-Ereignisse bieten eine hardwareunabhängige Alternative zu Mausereignissen. Zieh- und Radereignisse sind von Mausereignissen abgeleitet.
        </p>
      </td>
      <td>
        Mausereignisse, die auf
        <a href="/de/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Netzwerk/Verbindung</td>
      <td><p>Ereignisse im Zusammenhang mit der Herstellung und dem Verlust einer Netzwerkverbindung.</p></td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >
          ausgelöst werden.
        </p>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/de/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >)
          ausgelöst werden.
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
          >
          ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Leistung</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit leistungsbezogenen Spezifikationen, die in
          <a href="/de/docs/Web/API/Performance_API"
            >Performance APIs</a
          >
          gruppiert sind.
        </p>
      </td>
      <td>
        <p>
          Ereignisse, die auf
          <a href="/de/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >
          ausgelöst werden.
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
          Bietet hardwareunabhängige Benachrichtigungen von Zeigegeräten einschließlich Maus, Touch, Stift/Eingabestift.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/de/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Drucken</td>
      <td><p>Ereignisse im Zusammenhang mit dem Drucken.</p></td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#print_events"><code>Window</code></a
        >
        ausgelöst werden.
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
        Ereignisse, die auf
        <a href="/de/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
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
          >
          ausgelöst werden.
        </p>
      </td>
    </tr>
    <tr>
      <td>Textauswahl</td>
      <td>
        <p>
          <a href="/de/docs/Web/API/Selection">Selection API</a>
          Ereignisse im Zusammenhang mit der Auswahl von Text.
        </p>
      </td>
      <td>
        <p>
          Ereignis (<code>selectionchange</code>), das auf
          [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event),
          [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)
          ausgelöst wird.
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
          Bietet Benachrichtigungsereignisse von Interaktionen mit einem
          berührungsempfindlichen Bildschirm (d.h. mit einem Finger oder
          Eingabestift). Nicht verwandt mit der
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
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
      </td>
    </tr>
    <tr>
      <td>Server-gesendete Ereignisse</td>
      <td>
        <p>
          Ereignisse im Zusammenhang mit der
          <a href="/de/docs/Web/API/Server-sent_events"
            >Server-sent events API</a
          >.
        </p>
      </td>
      <td>
        Ereignisse, die auf
        <a href="/de/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >
        ausgelöst werden.
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
        >
        ausgelöst werden.
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
          >, und
          <a href="/de/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Werden verwendet, um auf neue Nachrichten und
          Fehlermeldungen bei der Nachrichtenübermittlung zu reagieren.
          Service Worker können auch über andere Ereignisse benachrichtigt
          werden, einschließlich Push-Benachrichtigungen, wenn Benutzer
          auf angezeigte Benachrichtigungen klicken, dass ein Push-Abonnement
          ungültig geworden ist, das Löschen von Elementen aus dem Inhaltsindex
          usw.
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
        >
        ausgelöst werden.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen und Auslösen von Ereignissen

Zusätzlich zu den von integrierten Schnittstellen ausgelösten Ereignissen können Sie selbst DOM-Ereignisse erstellen und auslösen. Solche Ereignisse werden im Allgemeinen **synthetische Ereignisse** genannt, im Gegensatz zu den vom Browser ausgelösten Ereignissen.

### Erstellen von benutzerdefinierten Ereignissen

Ereignisse können wie folgt mit dem [`Event`](/de/docs/Web/API/Event)-Konstruktor erstellt werden:

```js
const event = new Event("build");

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// Dispatch the event.
elem.dispatchEvent(event);
```

Dieses Codebeispiel verwendet die Methode [EventTarget.dispatchEvent()](/de/docs/Web/API/EventTarget/dispatchEvent).

### Hinzufügen von benutzerdefinierten Daten – CustomEvent()

Um dem Ereignisobjekt mehr Daten hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben.
Zum Beispiel könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht Ihnen dann, die zusätzlichen Daten im Ereignislistener zuzugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen von benutzerdefinierten Daten – Event unterklassifizieren

Die [`Event`](/de/docs/Web/API/Event)-Schnittstelle kann auch unterklassifiziert werden. Dies ist besonders nützlich für die Wiederverwendung, oder für komplexere benutzerdefinierte Daten, oder sogar um Methoden zum Ereignis hinzuzufügen.

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

Die zusätzlichen Daten können anschließend in den Ereignislistenern unter Verwendung der benutzerdefinierten Eigenschaften abgerufen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Ereignis-Bubbling

Es ist oft wünschenswert, ein Ereignis von einem untergeordneten Element auszulösen und ein übergeordnetes Element es abfangen zu lassen; optional können Sie Daten mit dem Ereignis einschließen:

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

### Dynamisches Erstellen und Auslösen von Ereignissen

Elemente können auf Ereignisse hören, die noch nicht erstellt wurden:

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

Dieses Beispiel veranschaulicht, wie ein Klick simuliert wird (das heißt, ein Klickereignis programmgesteuert generieren) auf einer Checkbox mit DOM-Methoden. [Sehen Sie das Beispiel in Aktion.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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

## Registrierung von Ereignishandlern

Es gibt zwei empfohlene Ansätze für die Registrierung von Handlern. Der Ereignishandlercode kann so ausgeführt werden, dass er ausgelöst wird, entweder indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen wird, oder indem der Handler als Listener für das Element registriert wird, indem die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird. In beiden Fällen wird der Handler ein Objekt empfangen, das der [`Event` interface](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mehrere Ereignishandler mit den Methoden des Ereignislisteners hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einstellung von Ereignishandlern mit HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwieriger zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%E2%80%94_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Nach Konvention verfügen JavaScript-Objekte, die Ereignisse auslösen, über entsprechende "onevent" Eigenschaft(en) (durch Voranstellen von "on" an den Namen des Ereignisses benannt). Diese Eigenschaften werden aufgerufen, um zugeordnete Handlercodes auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignishandlercode einzurichten, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Für jedes Ereignis eines Elements kann nur ein Ereignishandler zugewiesen werden. Bei Bedarf kann der Handler durch Zuweisung einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft eingerichtet wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder oder wird von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignishandler an einem Element einzurichten, ist die Verwendung der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode. Dieser Ansatz ermöglicht es, mehrere Listener einem Element zuzuordnen und sie bei Bedarf mit [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener) zu _entfernen_.

> [!NOTE]
> Die Möglichkeit, Ereignishandler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, dass derselbe Button in unterschiedlichen Umständen unterschiedliche Aktionen ausführt. Außerdem kann in komplexeren Programmen das Bereinigen von alten/nicht genutzten Ereignishandlern die Effizienz verbessern.

Das folgende Beispiel zeigt, wie eine `greet()`-Funktion als Listener/Ereignishandler für das `click`-Ereignis eingerichtet werden kann (Sie könnten bei Bedarf eine anonyme Funktionsausdruck anstelle einer benannten Funktion verwenden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen aufnehmen, um Aspekte wie das Capturing und Entfernen von Ereignissen zu steuern. Weitere Informationen finden Sie auf der Referenzseite [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung von AbortSignal

Eine bemerkenswerte Funktion von Ereignislistenern ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignishandler gleichzeitig aufzuräumen.

Dies geschieht, indem das gleiche [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignishandler übergeben wird, die Sie zusammen entfernen möchten. Dann können Sie [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, dem das `AbortSignal` gehört, und es entfernt alle Ereignishandler, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dieser Ereignishandler kann dann folgendermaßen entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

### Interaktion mehrerer Ereignishandler

Die IDL-Eigenschaft `onevent` (zum Beispiel, `element.onclick = ...`) und der HTML-Onevent-Inhaltsattribut (zum Beispiel, `<button onclick="...">`) zielen beide auf denselben einzelnen Handler-Slot. HTML wird geladen, bevor JavaScript auf dasselbe Element zugreifen kann, sodass normalerweise JavaScript ersetzt, was in HTML angegeben ist. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügte Handler sind unabhängig. Die Verwendung von `onevent` entfernt oder ersetzt keine Listener, die mit `addEventListener()` hinzugefügt wurden, und umgekehrt.

Wenn ein Ereignis gesendet wird, werden Listener in Phasen aufgerufen. Es gibt zwei Phasen: _Capturing_ und _Bubbling_. In der Capture-Phase beginnt das Ereignis beim höchsten Vorfahrenelement und bewegt sich den DOM-Baum hinunter, bis es das Ziel erreicht. In der Bubble-Phase bewegt sich das Ereignis in die entgegengesetzte Richtung. Ereignislistener lauschen standardmäßig in der Bubble-Phase, und sie können in der Erfassungsphase mithilfe von `capture: true` mit `addEventListener()` lauschen. Innerhalb einer Phase werden Listener in der Reihenfolge ausgeführt, in der sie registriert wurden. Der `onevent`-Handler wird zum ersten Mal registriert, wenn er einen nicht-null-Wert erhält; spätere Neubewertungen ändern nur seinen Rückruf, nicht seine Position in der Reihenfolge.

Das Aufrufen von [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) verhindert das Aufrufen von Listenern auf anderen Elementen, die später in der Propagationskette sind. [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) verhindert auch das Aufrufen verbleibender Listener auf demselben Element.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
