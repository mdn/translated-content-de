---
title: "WorkerNavigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/WorkerNavigator/userAgent
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.userAgent`** gibt den User-Agent-String für den aktuellen Browser zurück.

> [!NOTE]
> Die Spezifikation fordert, dass Browser so wenig Informationen wie möglich über dieses Feld bereitstellen. Gehen Sie nie davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, ihn überhaupt nicht zu verwenden, oder nur für aktuelle und vergangene Versionen eines Browsers. Neue Browser könnten denselben UA oder Teile davon wie ein älterer Browser verwenden: Sie haben wirklich keine Garantie, dass der Browser-Agent tatsächlich derjenige ist, der von dieser Eigenschaft angegeben wird.
>
> Beachten Sie außerdem, dass Benutzer eines Browsers den Wert dieses Feldes ändern können, wenn sie möchten (UA-Spoofing).

Die Browser-Identifikation basierend auf der Erkennung des User-Agent-Strings ist **unzuverlässig** und **nicht empfohlen**, da der User-Agent-String vom Benutzer konfigurierbar ist. Zum Beispiel:

- In Firefox können Sie die Einstellung `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun das; jedoch ändert dies nur den gesendeten HTTP-Header und beeinflusst nicht die durch JavaScript-Code durchgeführte Browsererkennung.
- Opera 6+ ermöglicht es Benutzern, die Browser-Identifikationszeichenfolge über ein Menü festzulegen.

## Wert

Ein String, der die vollständige User-Agent-Zeichenkette angibt, die der Browser sowohl in {{Glossary("HTTP", "HTTP")}}-Headern als auch als Antwort auf diese und andere verwandte Methoden des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekts bereitstellt.

Die User-Agent-Zeichenkette basiert auf einer formalen Struktur, die in mehrere Informationsbestandteile zerlegt werden kann. Jeder dieser Informationsbestandteile stammt aus anderen Navigator-Eigenschaften, die ebenfalls vom Benutzer festgelegt werden können. Gecko-basierte Browser halten sich an die folgende allgemeine Struktur:

```plain
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## Beispiele

```js
alert(navigator.userAgent);
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
