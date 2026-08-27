---
title: Informationen, die in einer WebIDL-Datei enthalten sind
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Beim Verfassen der Dokumentation zu einer API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist darauf ausgelegt, APIs zu beschreiben. In der breiteren Welt der Computer gibt es verschiedene Arten von IDL. In der Welt der Browser wird das IDL, das wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: dasjenige, das in der WebIDL-Spezifikation angegeben ist, und dasjenige, das in Browsern implementiert ist. Die Spezifikation ist die kanonische Referenz, und das Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browser-spezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN wollen wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher die Implementierungen doppelt (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkohärenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcodebaum, aber sie sind kein WebIDL, sodass sie ignoriert werden können. Ältere Versionen von Gecko haben einige ihrer WebIDL etwa verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Web-Schnittstellen zu beschreiben, aber dies stellt kein Problem in aktuellem Gecko-Code dar.
  - Für Chromium befinden sie sich an zwei Stellen, beide Unterverzeichnisse des Quellcodes' [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) Verzeichnisses: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass man etwas graben muss: z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch entwickelt, um erweitert zu werden, um mehr Informationen zu vermitteln, und Browser-Anbieter haben dies auch getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDLs erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://docs.webkit.org/Deep%20Dive/Architecture/JSWrappers.html) für seinen Dialekt veröffentlicht.

> [!NOTE]
> Hier wird nur der Teilbereich von WebIDL beschrieben, der beim Verfassen von Dokumentation am nützlichsten ist. Es gibt viele weitere Annotationen, die für Implementierer nützlich sind; siehe die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenkette, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der alle dafür definierten Konstruktoren, Eigenschaften und Methoden aufgelistet sind.

### Vererbungskette

Das Elternteil einer gegebenen Schnittstelle, falls vorhanden, wird nach dem Schnittstellennamen definiert, gefolgt von einem Doppelpunkt (`':'`). Es kann nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (unter Verwendung des \\{{APIRef}} Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden stehen mehreren Schnittstellen zur Verfügung. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Anschließend verwenden Sie das Schlüsselwort `includes`, um zu sagen, dass die in einem Mixin definierten Eigenschaften in einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einbeziehen. Sie unterstützen jedoch Partials, sodass Sie Dinge wie das Folgende sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und ausschließlich in der Spezifikation vorkommende Konstrukte. Sie können sie nicht in der Browserkonsole sehen und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin im IDL stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet das, anstatt `HTMLHyperlinkElementUtils` zu dokumentieren, dass die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Konsultieren Sie für Kompatibilitätsdaten die [Datenguideline für Mixins in BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise noch an einigen Stellen antreffen, werden Mixins mit dem Präfix `[NoInterfaceObject]` Anmerkung versehen:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Stil-Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenstern und Arbeitern

Verfügbarkeit in Web-Arbeitern (jeder Art) und im Fensterscope wird durch eine Anmerkung definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die partielle Schnittstelle, mit der sie aufgelistet ist.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

In diesem Fall ist `Performance.now()` im Fensterscope und für jeden Arbeiter verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Arbeiter verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle steht dem globalen [`Window`](/de/docs/Web/API/Window)-Scope zur Verfügung.
- `Worker`
  - : Die partielle Schnittstelle ist jedem Arbeiter, dass heißt wenn das globale Scope ein Nachfahre von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für den `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern von Firefox sind.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur dem [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur dem [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein anderer Wert ist möglich, wie `System`, aber dies hat eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]` Anmerkung haben. Es bedeutet, dass, wenn ein Objekt dieses Typs als globales Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass, wenn das globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir uns in einem dedizierten Arbeiter befinden, jede Schnittstelle, Eigenschaft oder Methode, die unter Verwendung der `[Exposed]` Annotation für `Worker` oder `DedicatedWorker` verfügbar gemacht wird, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden durch eine Präferenz (gewöhnlich als "pref" bezeichnet) gesteuert werden. Dies ist auch im WebIDL gekennzeichnet.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis` Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen abweichen).

### Nur in Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode oder im Chrome-Code des Browsers verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des `attribute`-Schlüsselwortes erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumentationen beziehen wir uns darauf als `HTMLMediaElement.error`, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenprefix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Prefix unter Verwendung von \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies auftreten kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen sein, einer Zeichenkette in eckigen Klammern (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die im Prosa beschrieben werden müssen. Hier eine Liste der standardmäßigen erweiterten Attribute von Typen und die Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird in nicht-standardisierter Weise in eine Zeichenkette umgewandelt. Der Standardweg ist die Umwandlung in die Zeichenkette `"null"`, aber in diesem Fall wird es in `""` umgewandelt.

    Ergänzen Sie den folgenden Satz am Ende des _Wert_ Abschnitts des Artikels:

    _Wenn er auf den `null`-Wert gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen auf der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Es muss als schreibgeschützt gekennzeichnet werden:

- In der Schnittstelle durch Hinzufügen des \\{{ReadOnlyInline}} Makros neben seinem Definitionsterm.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung beginnt mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Indem die Beschreibung auf der Schnittstellenseite beginnt mit _Gibt zurück…_

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'Rückgabe' eines Wertes beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

Einige Eigenschaften haben die `[PutForwards=xyz]` Annotation. Das bedeutet, dass die Eigenschaft eine Referenz auf ein anderes Objekt ist, und wenn ihr ein neuer Wert zugewiesen wird, wird die Zuweisung an die `xyz` Eigenschaft des referenzierten Objekts weitergeleitet.

Fügen Sie einen Absatz ähnlich dem folgenden am Ende des _Wert_ Abschnitts des Artikels hinzu:

_Obwohl die `style`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSStyleDeclaration`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft zuweisen, was der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleDeclaration`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern._

### Ausnahmen werfen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird durch die `[SetterThrows]` Annotation gekennzeichnet. Wenn dies der Fall ist, muss der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt zu Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, werden in der Spezifikation dieser API als Textinformation aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindings definiert werden. [Der Versuch, einen illegalen aufgezählten Wert zu setzen](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) löst eine {{jsxref('TypeError')}}-Ausnahme aus. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument gekennzeichnet.

Es ist ungewöhnlich, dass Getter Ausnahmen werfen, obwohl es in einigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]` Annotation verwendet. Auch hier muss der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt zu Ausnahmen enthalten.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen werfen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, auch ohne dass `[SetterThrows]` oder `[GetterThrows]` gesetzt sind. Zum Beispiel, im strengen Modus, wenn wir versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strengen Modus eine Ausnahme auslösen.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal lästig. Um dies zu verhindern, indem ein no-op-Setter erstellt wird (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]` Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungstext der Eigenschaft ein zusätzlicher Satz hinzugefügt, z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie geändert wird (auch nicht im strengen Modus); der Setter ist eine No-Operation und er wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Einfache Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString`, oder anders), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int`, oder anderes), und {{jsxref("Boolean")}} sind immer Kopien und es muss nichts Besonderes über sie vermerkt werden (es ist das natürliche Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist der Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite, als auch in der Beschreibung in den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, auch wenn sie in der betreffenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL durch die `[NewObject]` Annotation angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Das Ändern davon ändert nicht den internen Wert, und eine Änderung des internen Wertes betrifft nicht jede Objektinstanz. In der Dokumentation markieren wir es, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir deutlich, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollection` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine lebendige \\{{domxref("HTMLFormControlsCollection")}} zurück, die …

### Verfügbarkeit in Arbeitern

Die Verfügbarkeit einzelner Eigenschaften in Arbeitern ist ebenfalls im WebIDL enthalten. Für eine Eigenschaft ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (die nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder als die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Arbeitern verfügbar ist oder nicht, direkt vor dem "Syntax"-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL gekennzeichnet.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks` Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen abweichen).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir beziehen uns darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumentationen, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenprefix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Prefix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Syntax-Abschnitt der Unterseite der Methode aufgelistet. Sie sind im WebIDL in der Reihenfolge aufgelistet, eingeschlossen in Klammern, als kommagetrennte Liste. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist). Wenn als `optional` markiert, ist der Parameter optional in einen Methodenaufruf einzuschließen und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet ist. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielle Verhaltensweisen beschrieben durch erweiterte Attribute haben (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie in die Prosa einfügen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie die leere Zeichenkette (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts ist vor dem Methodennamen angegeben – im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn auf den Rückgabetyp ein Fragezeichen (`'?'`) folgt, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_ Abschnitt in den Dokumenten einfach "None (\{{jsxref("undefined")}})." angeben.

### Ausnahmen werfen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird durch die `[Throws]`-Annotation markiert. Wenn dies der Fall ist, muss der Syntax-Abschnitt der Methodenseite einen Abschnitt zu Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, werden in der Spezifikation dieser API als Textinformation aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindings definiert werden. [Der Versuch, einen illegalen aufgezählten Wert zu setzen](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) als Parameter wird eine {{jsxref('TypeError')}}-Ausnahme auslösen. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument gekennzeichnet.

Schauen Sie sich einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Arbeitern

Die Verfügbarkeit einzelner Methoden in Arbeitern ist ebenfalls im WebIDL enthalten. Für eine Methode ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (die nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder als die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Arbeitern verfügbar ist oder nicht, direkt vor dem Syntax-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL gekennzeichnet.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()` Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen abweichen).

## Spezielle Methoden

Einige Methoden werden nicht als reguläre Methoden im WebIDL aufgelistet, sondern stattdessen als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt, das auf einer Schnittstelle basiert, in Kontexten aufgelöst wird, die eine Zeichenkette erwarten. (Siehe den [Stringifiers](#stringifiers) Abschnitt.) Zusätzlich wird das Schlüsselwort `toString()` zugeordnet und definiert als:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird zu `toJSON()` zugeordnet und definiert als:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur das nicht-standardmäßige, wahrscheinlich früh vorgeschlagene `jsonifier` findet sich in mozilla-central.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten von Iterationen, die möglich sind: der _Werte-Iterator_ und der _Paar-Iterator._

#### Werte-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes zurückgibt (die `unsigned long` sind).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln zurückgibt, die seine Indizes sind (die `unsigned long` sind). Im Fall von Werte-Iterators sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt Ihnen die Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Weisen definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<valueType>` Notation. Beispielsweise, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` umfasst.
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Eine solche Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [Werte zum Iterieren über](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, also die Wertepaare. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Wertepaare zurückgibt. Zum Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt. Zum Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln zurückgibt. Zum Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt Ihnen die Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaare, über die iteriert werden soll, können auf eine der folgenden Weisen definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<keyType, valueType>` Notation. Beispielsweise, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Eine solche Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [Wertepaare zum Iterieren über](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Mengen-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt, die die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()`, und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Die set-like kann mit `readonly` oder auch nicht vorangestellt sein. Wenn nicht schreibgeschützt, werden auch die Methoden zur Änderung der Menge implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes zurückgibt. Zum Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt. Zum Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln zurückgibt. Zum Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-like Deklaration nicht read-only vorangestellt ist, werden auch die folgenden Methoden generiert:

- `add()` die einen Eintrag hinzufügt. Z.B. die `.add()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` die das set-like entleert. Z.B. die `.clear()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` die einen Eintrag entfernt. Z.B. die `.delete()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle erlaubt Ihnen auch die Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder weisen auf spezielle Verhaltensweisen hin, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zum Hinzufügen der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifiers auch an, dass eine Objektinstanz, wenn sie als Zeichenkette verwendet wird, eine andere Zeichenkette als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genau wie hängt von der Art ab, wie es im IDL spezifiziert ist. Ungeachtet des Wie soll das nicht-Standardverhalten auf der Schnittstellenseite beschrieben werden.

Wenn das `stringifier`-Schlüsselwort einen Attributnamen begleitet, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Zeilen im Code äquivalent. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das `stringifier`-Schlüsselwort allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich tut, ziehen Sie die Spezifikation der Schnittstelle zurate oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL ein wenig versteckt: Sie werden als Anmerkungen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird unter Verwendung der `Constructor`-Annotation auf der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird der obige mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` angegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es können auch mehrere unbenannte Konstruktoren vorhanden sein, die sich durch ihre Parameterlisten unterscheiden. Die gesamte Syntax wird auf einer einzigen Unterseite dokumentiert.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Benannte Konstruktoren

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen hat als seine Schnittstelle. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL unter Verwendung der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parameter innerhalb der Klammern, im gleichen Format, wie Sie es bei Methoden sehen werden.

Es können mehrere benannte Konstruktoren für eine spezifische Schnittstelle vorhanden sein, aber das kommt extrem selten vor; in einem solchen Fall schließen wir eine Unterseite pro Namen ein.

### Neue Konstruktorsyntax

Ab September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Attributierung mehr auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax, die `constructor` genannt wird, ohne explizit definierten Rückgabetyp, der wie folgt geschrieben wird:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute nun auf den Konstruktor spezifiziert werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren werfen. Wenn ein Konstruktor wirklich werfen sollte, wird `[Throws]` verwendet, um darauf hinzuweisen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, sodass Sie wahrscheinlich beide in der freien Wildbahn antreffen werden. Daher werden wir hier weiterhin beide Arten von Syntax behandeln.

### Verfügbarkeit in Arbeitern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie bei einer Methode.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie bei einer Methode.
