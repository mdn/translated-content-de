---
title: "WorkerNavigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/WorkerNavigator/userAgent
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.userAgent`** gibt die User-Agent-Zeichenkette für den aktuellen Browser zurück.

> [!NOTE]
> Die Spezifikation fordert, dass Browser so wenig Informationen wie möglich über dieses Feld bereitstellen. Gehen Sie niemals davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, sie gar nicht oder nur für aktuelle und vergangene Versionen eines Browsers zu verwenden. Neue Browser können beginnen, denselben UA oder Teile davon wie ein älterer Browser zu verwenden: Sie haben wirklich keine Garantie, dass der Browser-Agent tatsächlich der ist, der von dieser Eigenschaft angegeben wird.
>
> Denken Sie auch daran, dass Benutzer eines Browsers den Wert dieses Feldes ändern können, wenn sie möchten (UA-Spoofing).

Die Browser-Identifikation durch Erkennung der User-Agent-Zeichenkette ist **unzuverlässig** und **wird nicht empfohlen**, da die User-Agent-Zeichenkette von Benutzern konfigurierbar ist. Beispielsweise:

- In Firefox können Sie die Einstellung `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun dies; jedoch wird dadurch nur der gesendete HTTP-Header geändert und nicht die Browsererkennung, die durch JavaScript-Code durchgeführt wird.
- Opera 6+ ermöglicht es Benutzern, die Browser-Identifikationszeichenfolge über ein Menü festzulegen.

## Wert

Eine Zeichenkette, die die vollständige User-Agent-Zeichenkette angibt, die der Browser sowohl in [HTTP](/de/docs/Glossary/HTTP)-Headern als auch als Antwort auf diese und andere verwandte Methoden im [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt bereitstellt.

Die User-Agent-Zeichenkette basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann. Jedes dieser Informationsstücke stammt von anderen Navigator-Eigenschaften, die ebenfalls vom Benutzer festgelegt werden können. Auf Gecko basierende Browser halten sich an die folgende allgemeine Struktur:

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
