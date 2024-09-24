---
title: Geolocation-API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation-API** ermöglicht es dem Benutzer, seinen Standort Webanwendungen zur Verfügung zu stellen, wenn er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu melden.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird den Benutzer beim ersten Anfordern um die Erlaubnis zur Standortfreigabe bitten.

## Konzepte und Nutzung

In Ihrer Web-App möchten Sie häufig die Standortinformationen eines Benutzers abrufen, um beispielsweise seinen Standort auf einer Karte darzustellen oder personalisierte Informationen bereitzustellen, die für seinen Standort relevant sind.

Die Geolocation-API wird über einen Aufruf von {{domxref("Navigator.geolocation", "navigator.geolocation")}} aufgerufen; Dies bewirkt, dass der Browser des Benutzers ihn um Erlaubnis bittet, auf seine Standortdaten zuzugreifen. Wenn er zustimmt, verwendet der Browser die bestmögliche Funktionalität des Geräts, um diese Informationen abzurufen (zum Beispiel GPS).

Der Entwickler kann nun auf diese Standortinformationen auf verschiedene Weise zugreifen:

- {{domxref("Geolocation.getCurrentPosition()")}}: Ruft den aktuellen Standort des Geräts ab.
- {{domxref("Geolocation.watchPosition()")}}: Registriert eine Handlerfunktion, die automatisch jedes Mal aufgerufen wird, wenn sich der Standort des Geräts ändert, und gibt den aktualisierten Standort zurück.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgs-Callback: Wenn das Abrufen des Standorts erfolgreich ist, wird der Callback mit einem {{domxref("GeolocationPosition")}}-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehler-Callback: Wenn das Abrufen des Standorts fehlschlägt, wird der Callback mit einem {{domxref("GeolocationPositionError")}}-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bietet, was schief gelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Standortdaten bereitstellt.

Weitere Informationen zur Nutzung von Geolocation finden Sie unter [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- {{domxref("Geolocation")}}
  - : Die Hauptklasse dieser API — enthält Methoden, um die aktuelle Position des Benutzers abzurufen, Änderungen an seiner Position zu überwachen und eine zuvor gesetzte Überwachung zu löschen.
- {{domxref("GeolocationPosition")}}
  - : Repräsentiert die Position eines Benutzers. Eine `GeolocationPosition`-Instanz wird durch einen erfolgreichen Aufruf einer der Methoden innerhalb von {{domxref("Geolocation")}} innerhalb eines Erfolgs-Callbacks zurückgegeben und enthält einen Zeitstempel sowie eine {{domxref("GeolocationCoordinates")}}-Objektinstanz.
- {{domxref("GeolocationCoordinates")}}
  - : Repräsentiert die Koordinaten der Position eines Benutzers; Eine `GeolocationCoordinates`-Instanz enthält Breiten- und Längengrad sowie andere wichtige dazugehörige Informationen.
- {{domxref("GeolocationPositionError")}}
  - : Ein `GeolocationPositionError` wird bei einem fehlgeschlagenen Aufruf einer der Methoden innerhalb von {{domxref("Geolocation")}} innerhalb eines Fehler-Callbacks zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.geolocation")}}
  - : Der Einstiegspunkt in die API. Gibt eine {{domxref("Geolocation")}}-Objektinstanz zurück, von der aus alle anderen Funktionen zugänglich sind.

## Sicherheitsüberlegungen

Die Geolocation-API ermöglicht es Benutzern, programmgesteuert auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) zuzugreifen.

Der Zugriff kann weiter durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} gesteuert werden. Die Standard-Zulassungsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in eingebetteten Frames mit gleicher Herkunft ermöglicht. Die Nutzung durch Dritte wird aktiviert, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, um einer bestimmten Drittanbieter-Herkunft die Erlaubnis zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element mit Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="geolocation"/></iframe>
```

Geolokalisierungsdaten können Informationen offenlegen, die der Geräteinhaber nicht teilen möchte. Daher müssen Benutzer eine explizite Genehmigung über eine Eingabeaufforderung erteilen, wenn entweder {{domxref("Geolocation.getCurrentPosition()")}} oder {{domxref("Geolocation.watchPosition()")}} aufgerufen wird (es sei denn, der Genehmigungsstatus ist bereits `granted` oder `denied`). Die Lebensdauer einer erteilten Genehmigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein. Mit der [Permissions API](/de/docs/Web/API/Permissions_API) `geolocation`-Genehmigung kann geprüft werden, ob der Zugriff auf Standortinformationen `granted`, `denied` oder `prompt` (Benutzerbestätigung einer Eingabeaufforderung erforderlich) ist.

## Beispiele

Beispielcode finden Sie unter [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die standortbezogene WLAN-Ortung häufig von Google bereitgestellt wird, ist die Standard-Geolocation-API möglicherweise in China nicht verfügbar. Lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) können verwendet werden. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionierung bereitzustellen.

## Siehe auch

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation-API auf w3.org](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
