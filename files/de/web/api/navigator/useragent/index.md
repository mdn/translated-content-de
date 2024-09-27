---
title: "Navigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/Navigator/userAgent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.userAgent`** gibt den User-Agent-String für den aktuellen Browser zurück.

> [!NOTE]
> Die Spezifikation verlangt von Browsern, so wenig Informationen wie möglich über dieses Feld bereitzustellen. Gehen Sie niemals davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, es überhaupt nicht zu verwenden, oder nur für aktuelle und frühere Versionen eines Browsers. Neue Browser könnten beginnen, denselben UA oder einen Teil davon wie ein älterer Browser zu verwenden: Sie haben wirklich keine Garantie dafür, dass der angezeigte Benutzeragent tatsächlich derjenige ist, der von dieser Eigenschaft beworben wird.
>
> Beachten Sie auch, dass Benutzer eines Browsers den Wert dieses Feldes ändern können, wenn sie möchten (UA-Spoofing).

Die Browser-Erkennung basierend auf dem User-Agent-String ist **unzuverlässig** und **nicht empfohlen**, da der User-Agent-String vom Benutzer konfigurierbar ist. Zum Beispiel:

- In Firefox können Sie die Voreinstellung `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun dies; allerdings ändert dies nur den gesendeten HTTP-Header, der von `navigator.userAgent` zurückgegeben wird. Es könnte andere Methoden geben, die JavaScript-Code nutzen, um den Browser zu identifizieren.
- Opera 6+ erlaubt Benutzern, den Browser-Identifikationsstring über ein Menü festzulegen.

## Wert

Ein String, der den vollständigen User-Agent-String des Browsers angibt, sowohl in [HTTP](/de/docs/Glossary/HTTP)-Headern als auch als Antwort auf diese und andere verwandte Methoden im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt.

Der User-Agent-String basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann. Jedes dieser Informationsstücke stammt aus anderen navigator-Eigenschaften, die ebenfalls vom Benutzer einstellbar sind. Für weitere Informationen über die Form des User-Agent-Strings siehe den {{HTTPHeader("User-agent")}} HTTP-Header.

## Beispiele

```js
alert(window.navigator.userAgent);
// alerts "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
