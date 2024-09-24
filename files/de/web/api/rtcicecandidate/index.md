---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die **`RTCIceCandidate`**-Schnittstelle, Teil der [WebRTC API](/de/docs/Web/API/WebRTC_API), repräsentiert eine Kandidatenkonfiguration für Interactive Connectivity Establishment ({{Glossary("ICE")}}), die zur Etablierung einer {{domxref("RTCPeerConnection")}} verwendet werden kann.

Ein ICE-Kandidat beschreibt die Protokolle und Routing-Anforderungen, die WebRTC benötigt, um mit einem entfernten Gerät zu kommunizieren. Wenn eine WebRTC-Peer-Verbindung gestartet wird, werden typischerweise eine Reihe von Kandidaten von jedem Ende der Verbindung vorgeschlagen, bis sie sich gegenseitig auf einen einigen, der die Verbindung am besten beschreibt. WebRTC verwendet dann die Details dieses Kandidaten, um die Verbindung zu initiieren.

Einzelheiten dazu, wie der ICE-Prozess funktioniert, finden Sie unter [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime). Der Artikel [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) bietet zusätzliche hilfreiche Details.

## Konstruktor

- {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}

  - : Erstellt ein `RTCIceCandidate`-Objekt, um einen einzelnen ICE-Kandidaten darzustellen, der optional basierend auf einem Konfigurationsobjekt konfiguriert wird.

    > [!NOTE]
    > Aus Gründen der Abwärtskompatibilität akzeptiert der Konstruktor auch eine Zeichenkette als Eingabe, die den Wert der {{domxref("RTCIceCandidate.candidate", "candidate")}}-Eigenschaft anstelle des Konfigurationsobjekts enthält.

## Instanz-Eigenschaften

- {{domxref("RTCIceCandidate.address", "address")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die IP-Adresse des Kandidaten enthält.
- {{domxref("RTCIceCandidate.candidate", "candidate")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Transportadresse für den Kandidaten darstellt, die für Konnektivitätsprüfungen verwendet werden kann. Das Format dieser Adresse ist ein `candidate-attribute`, wie in {{RFC(5245)}} definiert. Diese Zeichenkette ist leer (`""`), wenn das `RTCIceCandidate` ein "Ende der Kandidaten"-Indikator ist.
- {{domxref("RTCIceCandidate.component", "component")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die angibt, ob der Kandidat ein RTP- oder ein RTCP-Kandidat ist; der Wert ist entweder `rtp` oder `rtcp` und wird aus dem `"component-id"`-Feld in der `candidate`-a-line-Zeichenkette abgeleitet.
- {{domxref("RTCIceCandidate.foundation", "foundation")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die einen eindeutigen Bezeichner enthält, der für alle Kandidaten des gleichen Typs gleich ist, die gleiche Basis teilen (die Adresse, von der der ICE-Agent den Kandidaten gesendet hat), und vom gleichen {{Glossary("STUN")}}-Server stammen. Dies wird verwendet, um die ICE-Leistung zu optimieren, während Kandidaten, die auf mehreren {{domxref("RTCIceTransport")}}-Objekten erscheinen, priorisiert und korreliert werden.
- {{domxref("RTCIceCandidate.port", "port")}} {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Portnummer des Kandidaten angibt.
- {{domxref("RTCIceCandidate.priority", "priority")}} {{ReadOnlyInline}}
  - : Ein long-Wert, der die Priorität des Kandidaten angibt.
- {{domxref("RTCIceCandidate.protocol", "protocol")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die angibt, ob das Protokoll des Kandidaten `"tcp"` oder `"udp"` ist.
- {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}} {{ReadOnlyInline}}
  - : Wenn der Kandidat aus einem anderen Kandidaten abgeleitet wird, ist `relatedAddress` eine Zeichenkette, die die IP-Adresse dieses Host-Kandidaten enthält. Für Host-Kandidaten ist dieser Wert `null`.
- {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}} {{ReadOnlyInline}}
  - : Für einen Kandidaten, der aus einem anderen abgeleitet ist, wie ein Relay- oder reflexiver Kandidat, ist `relatedPort` eine Nummer, die die Portnummer des Kandidaten angibt, aus dem dieser Kandidat abgeleitet ist. Für Host-Kandidaten ist die `relatedPort`-Eigenschaft `null`.
- {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die das Medienstream-Identifikationstag des Kandidaten spezifiziert, das den Medienstream innerhalb der Komponente, mit der der Kandidat assoziiert ist, eindeutig identifiziert, oder `null`, wenn keine solche Assoziation besteht.
- {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} {{ReadOnlyInline}}
  - : Wenn nicht `null`, gibt `sdpMLineIndex` die nullbasierte Indexnummer der Medienbeschreibung an (wie in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566) definiert) im {{Glossary("SDP")}}, mit dem der Kandidat assoziiert ist.
- {{domxref("RTCIceCandidate.tcpType", "tcpType")}} {{ReadOnlyInline}}
  - : Wenn `protocol` `"tcp"` ist, repräsentiert `tcpType` den Typ des TCP-Kandidaten. Andernfalls ist `tcpType` `null`.
- {{domxref("RTCIceCandidate.type", "type")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Typ des Kandidaten angibt, als einer der auf [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) aufgelisteten Strings.
- {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die ein zufällig generiertes Username-Fragment ("ice-ufrag") enthält, das ICE für die Nachrichtenintegrität neben einem zufällig generierten Passwort ("ice-pwd") verwendet. Sie können diese Zeichenkette verwenden, um die Generationen des ICE-Prozesses zu überprüfen; jede Generation desselben ICE-Prozesses verwendet dasselbe `usernameFragment`, sogar über ICE-Neustarts hinweg.

## Instanz-Methoden

- {{domxref("RTCIceCandidate.toJSON", "toJSON()")}}
  - : Gibt eine {{Glossary("JSON")}}-Darstellung der aktuellen Konfiguration des `RTCIceCandidate` zurück. Das Format der Darstellung ist dasselbe wie das `candidateInfo`-Objekt, das optional an den {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}-Konstruktor übergeben werden kann, um einen Kandidaten zu konfigurieren.

## Beispiele

Beispiele finden Sie im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling), der den gesamten Prozess demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
