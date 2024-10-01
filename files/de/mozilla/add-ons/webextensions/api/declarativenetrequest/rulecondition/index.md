---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 8b4e4810dcf61909fb1b492f4dcf81f1caf43fed
---

{{AddonSidebar}}

Details der Bedingung, die bestimmt, ob eine Regel mit einer Anfrage übereinstimmt, als Eigenschaft `condition` einer {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Bestimmt, ob die Netzwerk-Anfrage eine First-Party- oder Third-Party-Anfrage ist. Die Anfrage gilt als First-Party, wenn sie für dieselbe Domain wie das Dokument oder Subdokument, das die Anfrage initiiert, erfolgt. Andernfalls wird sie als Third-Party betrachtet. Wenn weggelassen, werden alle Anfragen akzeptiert. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel stimmt nur mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel stimmt nicht mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Diese stimmt mit dem Initiator der Anfrage überein und nicht mit der Anfrage-URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anfragen überein, die von dieser Liste von Domains stammen. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#whocanonical_domain) sollte verwendet werden. Diese stimmt mit dem Initiator der Anfrage überein und nicht mit der Anfrage-URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (je nachdem, welcher angegeben ist) case-sensitive ist. Während es einen Konsens darüber gibt, dass der Standardwert `false` in allen Browsern sein sollte, siehe [WECG issue 269](https://github.com/w3c/webextensions/issues/269), war der Wert in (älteren) Versionen von Chrome und Safari `true`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Einzelheiten.
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, um mit der Netzwerk-Anfrage-URL übereinzustimmen. Beachten Sie, dass:
    - Das unterstützte Format ist nicht stabil und variiert je nach Browser, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Es kann nur einer der beiden [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehen. Dies wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://en.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Fall von internationalisierten Domains) und alle anderen nicht-ASCII-Zeichen in UTF-8 Prozent-kodiert sind.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nur mit Netzwerk-Anfragen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel stimmt nicht mit Netzwerk-Anfragen überein, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste leer oder weggelassen wird, werden keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der HTTP-Anfragemethoden, die die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Die Angabe einer `requestMethods`-Regelbedingung schließt auch nicht-HTTP(s)-Anfragen aus, während die Spezifizierung von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste der Anfragemethoden, mit denen die Regel nicht übereinstimmt. Es sollte nur entweder [`requestMethods`](#requestmethods) oder `excludedRequestMethods` angegeben werden. Wenn keine der beiden angegeben ist, werden alle Anfragemethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste der Ressourcentypen, mit denen die Regel nicht übereinstimmt. Es sollte nur entweder [`resourceTypes`](#resourcetypes) oder `excludedResourceTypes` angegeben werden. Wenn keine von beiden angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, die die Regel übereinstimmen sollte. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} stimmt mit Anfragen überein, die nicht von einem Tab stammen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbasierte Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, die die Regel nicht übereinstimmen sollte. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht von einem Tab stammen. Nur für sitzungsbasierte Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der Netzwerk-Anfrage-URL abgeglichen wird. Unterstützte Konstrukte:

    - `*` : Wildcard: Passt auf eine beliebige Anzahl von Zeichen.
    - `|` : Linker oder rechter Anker: Wenn es am Anfang oder Ende des Musters verwendet wird, spezifiziert es den Anfang oder das Ende der URL.
    - `||` : Domainnamenanker: Wenn es am Anfang des Musters verwendet wird, spezifiziert es den Beginn einer (Sub-)Domain der URL.
    - `^` : Trennzeichen: Dies passt auf alles außer einem Buchstaben, einer Ziffer oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch das Ende der URL statt eines Trennzeichens entsprechen.

    Der `urlFilter` besteht aus den folgenden Teilen: (optionaler linker/Domainnamenanker) + Muster + (optionaler rechter Anker).
    Wenn es weggelassen wird, werden alle URLs abgeglichen. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie, dass:

    - Es kann nur einer der beiden `urlFilter` oder [`regexFilter`](#regexfilter) angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Diese wird mit einer URL abgeglichen, bei der der Host im [Punycode](https://en.wikipedia.org/wiki/Punycode)-Format kodiert ist (im Fall von internationalisierten Domains) und alle anderen nicht - ASCII-Zeichen in UTF-8 Prozent-kodiert sind. Zum Beispiel, wenn die Anfrage-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` mit der URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

Die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegebenen Domains müssen die folgenden Richtlinien einhalten:

- Subdomains wie "a.example.com" sind erlaubt.
- Die Einträge müssen nur aus _kleinbuchstabigen_ ASCII-Zeichen bestehen.
- Verwenden Sie [Punycode](https://en.wikipedia.org/wiki/Punycode)-Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 durch Punkte getrennte Zahlen dargestellt werden.
- IPv6-Adressen sollten in ihrer kanonischen Form, eingeklammert, dargestellt werden.

Um die kanonische Domain für eine URL programmgesteuert zu generieren, verwenden Sie die [URL API](/de/docs/Web/API/URL) und lesen Sie deren `hostname`-Eigenschaft, d. h. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
