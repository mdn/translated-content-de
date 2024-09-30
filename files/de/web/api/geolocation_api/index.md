---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es Benutzern, ihre Position an Webanwendungen weiterzugeben, wenn sie dies wünschen. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird den Benutzer beim ersten Anfordern um Erlaubnis zur Standortfreigabe bitten.

## Konzepte und Nutzung

Häufig werden Sie die Standortinformationen eines Benutzers abrufen wollen, um beispielsweise deren Standort auf einer Karte darzustellen oder personalisierte Informationen basierend auf deren Standort anzuzeigen.

Auf die Geolocation API wird über einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies führt dazu, dass der Browser des Benutzers um Erlaubnis zur Standortdatenfreigabe bittet. Wenn er zustimmt, verwendet der Browser die bestmögliche Funktionalität auf dem Gerät, um diese Informationen abzurufen (beispielsweise GPS).

Der Entwickler kann auf diese Standortinformationen auf verschiedene Weise zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft die aktuelle Position des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die automatisch bei jeder Änderung der Geräteposition aufgerufen wird und die aktualisierte Position zurückgibt.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein obligatorischer Erfolgs-Callback: Wenn das Abrufen der Position erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das den Zugriff auf die Standortdaten ermöglicht.
- Ein optionaler Fehler-Callback: Wenn das Abrufen der Position fehlschlägt, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen zum Abrufen der Positionsdaten bereitstellt.

Für weitere Informationen zur Nutzung von Geolocation lesen Sie [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Benutzerposition, zum Überwachen von Positionsänderungen und zum Löschen einer zuvor festgelegten Überwachung.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine Instanz von `GeolocationPosition` wird bei einem erfolgreichen Aufruf einer der Methoden innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) in einem Erfolgs-Callback zurückgegeben und enthält einen Zeitstempel plus eine Instanz des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Benutzerposition; eine Instanz von `GeolocationCoordinates` enthält Breiten- und Längengrade sowie andere wichtige zugehörige Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird bei einem erfolglosen Aufruf einer der Methoden innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) in einem Fehler-Callback zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz des [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekts zurück, von der aus alle anderen Funktionalitäten abgerufen werden können.

## Sicherheitserwägungen

Die Geolocation API ermöglicht es Benutzern, in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) programmgesteuert auf Standortinformationen zuzugreifen.

Der Zugriff kann weiter durch die Richtlinie [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}}.
Die Standardgenehmigungsliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in gleichen Ursprungs-verschachtelten Frames ermöglicht.
Drittanbieter-Nutzung wird ermöglicht, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, um einer bestimmten Drittpartei-Origin die Erlaubnis zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"` Attribut muss dann zum iframe-Element mit Quellen von dieser Origin hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="geolocation"/></iframe>
```

Geolocation-Daten können Informationen offenlegen, die der Geräteinhaber nicht teilen möchte.
Deshalb müssen Benutzer ausdrücklich über eine Eingabeaufforderung die Genehmigung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Lebensdauer einer gewährten Berechtigung hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die `geolocation` Berechtigung der [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu testen, ob der Zugriff auf Standortinformationen `granted`, `denied` oder `prompt` (erfordert Benutzeranerkennung einer Eingabeaufforderung) ist.

## Beispiele

Siehe [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da Wi-Fi-basierte Standortbestimmung oft von Google bereitgestellt wird, kann die Vanilla-Geolocation-API in China möglicherweise nicht verfügbar sein. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) verwenden. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionierung bereitzustellen.

## Siehe auch

- [Using the Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Geolocation API auf w3.org](https://www.w3.org/TR/geolocation/)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks blog)
